// import { browsersync } from "./gulp/config/plugins.js";

export const server = (param) => {
    app.plugins.browsersync.init({
        server: {
            baseDir: `${app.path.build.html}`
        },
        notify: false,
        port: 3000,
    })
}

// gulp.task('browsersync', function () {
//     browserSync.init({
//         server: {
//             baseDir: `${app.path.build.html}`
//         },
//         notify: false,
//         port: 3000,
//     });
// });