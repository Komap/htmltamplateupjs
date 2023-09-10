// функция которая  из раборчей папки копирует в билдовую

export const copy = () =>{
    return app.gulp.src(app.path.src.files)
    .pipe(app.gulp.dest(app.path.build.files))
}