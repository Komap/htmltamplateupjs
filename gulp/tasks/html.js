import fileIncludee from "gulp-file-include";
import gulpWebpHtmlNosvg from "gulp-webp-html-nosvg";
import gulpVersionNum from "gulp-version-number";
// import fileInclude from "gulp-include";

export const html = () => {
    return app.gulp.src(app.path.src.html)
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "HTML",
                message: "Error <%= error.message %>"
            }))
        )
        .pipe(fileIncludee())
        .pipe(app.plugins.replace(/@img\//g, 'img/'))
        .pipe(app.plugins.if(
            app.isBuild,
            gulpWebpHtmlNosvg()
        ))
        .pipe(app.plugins.if(
            app.isBuild,
            gulpVersionNum({
                'value': '%DT%',
                'append': {
                    'key': '_v',
                    'cover': '_v',
                    'to': [
                        'css',
                        'js',
                    ]
                },
                'output': {
                    'file': 'gulp/version.json'
                }
            })
        ))
        .pipe(app.gulp.dest(app.path.build.html))
        .pipe(app.plugins.browsersync.stream())
}
