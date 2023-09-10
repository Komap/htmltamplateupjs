import webp from "gulp-webp";
import imagemin from "gulp-imagemin";


export const img = () => {
    return app.gulp.src(app.path.src.img)
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "IMG",
                message: "Error <%= error.message %>"
            }))
        )
        .pipe(app.plugins.newer(app.path.build.img))//сразу чек в билд чтоб проверить обновление
        .pipe(app.plugins.if(
            app.isBuild,
            webp()//в действии этот плагин
        ))
        .pipe(app.plugins.if(
            app.isBuild,
            app.gulp.dest(app.path.build.img)//выгурзка 
        ))
        .pipe(app.plugins.if(
            app.isBuild,
            app.gulp.src(app.path.src.img)// чек сорсную папку с картинками
        ))
        .pipe(app.plugins.if(
            app.isBuild,
            app.plugins.newer(app.path.build.img)//снова проверка на обновление
        ))
        .pipe(app.plugins.if(
            app.isBuild,
            imagemin({
                progressive: true,
                svgoPlugins: [{ removeViewBox: false }],
                interlaced: true,
                optimizationLevel: 3
            })
        ))
        .pipe(app.gulp.dest(app.path.build.img))//выгурзка 
        .pipe(app.gulp.src(app.path.src.svg))// чек на СВГ
        .pipe(app.gulp.dest(app.path.build.img))//выгурзка 
        .pipe(app.plugins.browsersync.stream())
}
