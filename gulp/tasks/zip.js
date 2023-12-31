import del from "del";
import zipPlugin from "gulp-zip";

export const zip = () => {
    del(`./${app.path.rootF}.zip`);
    return app.gulp.src(`${app.path.buildF}/**/*.*`, {})
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "ZIP",
                message: "Error <%= error.message %>"
            }))
        )
        .pipe(zipPlugin(`${app.path.rootF}.zip`))
        .pipe(app.gulp.dest('./'))
}
