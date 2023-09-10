import gulpSass from 'gulp-sass';
import dSass from 'sass';
import rename from 'gulp-rename';
import cleanCSS from 'gulp-clean-css';
import webpCss from 'gulp-webpcss';
import autoprefixer from 'gulp-autoprefixer';
import groupCssMediaQueries from 'gulp-group-css-media-queries';

const sass = gulpSass(dSass);

export const scss = () => {
    return app.gulp.src(app.path.src.scss, { soursmaps: app.isDev })
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "SCSS",
                message: "Error <%= error.message %>"
            }))
        )
        .pipe(app.plugins.replace(/@img\//g, "../img/"))
        .pipe(sass({
            outputStyle: 'expanded',
        }))
        .pipe(app.plugins.if(
            app.isBuild,
            groupCssMediaQueries()
        ))
        .pipe(app.plugins.if(
            app.isBuild,
            webpCss({
                webpClass: ".webp",
                noWebpClass: ".no-webp",
            })
        ))
        .pipe(app.plugins.if(
            app.isBuild,
            autoprefixer({
                grid: true,
                overrrideBrowserlist: ["last 3 version"],
                cascade: true
            })
        ))
        //не сжатый css в билд
        .pipe(app.gulp.dest(app.path.build.css))
        .pipe(app.plugins.if(
            app.isBuild,
            cleanCSS()
        ))
        .pipe(rename({
            extname: ".min.css",
        }))
        .pipe(app.gulp.dest(app.path.build.css))
        .pipe(app.plugins.browsersync.stream())
}