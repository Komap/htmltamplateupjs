import { configFTP } from '../config/ftp.js';
import vinylFTP from 'vinyl-ftp';
import util from 'gulp-util';

export const ftp = () => {
    configFTP.log = util.log;
    const ftpConnect = vinylFTP.create(configFTP)
    return app.gulp.src(`${app.path.buildF}/**/*.*`, {})
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "FTP",
                message: "Error <%= error.message %>"
            }))
        )
        .pipe(ftpConnect.dest(`/${app.path.ftp}/${app.path.rootF}`))
}

//${app.path.ftp} - дестанирует на фтп, где уже будет прописан к нему путь с свойсте

//${app.path.rootF} - эта часть отвечает за название пакпки билда моего проекта