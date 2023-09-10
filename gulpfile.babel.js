//!"webp-converter": "^2.2.3"


import gulp from 'gulp';
// const gulp = require('gulp');
//36:22

//импорт пути(объекта), где лежить путь к разработке 
import {path} from "./gulp/config/path";

// импортированная функция которая  из раборчей папки копирует в билдовую
import {copy} from "./gulp/tasks/copy.js";
// импортированная функция которая  удаляет все в билдовой, если было удалено в папке для разработки
import {reset} from "./gulp/tasks/reset.js";

import {html} from "./gulp/tasks/html.js";

import {plugins} from "./gulp/config/plugins.js";

import {server} from "./gulp/tasks/server.js";

import {scss} from "./gulp/tasks/scss.js";

import {js} from "./gulp/tasks/js.js";

import {img} from "./gulp/tasks/img.js";

import {otfToTtF, ttfToWoff, fontsStyle} from "./gulp/tasks/fonts.js";

import {svgSprite} from "./gulp/tasks/svgsprite.js";

// import {zip} from "./gulp/tasks/zip.js";

import {ftp} from "./gulp/tasks/ftp.js";





global.app = {
  isBuild: process.argv.includes('--build'),
  isDev: !process.argv.includes('--build'),
  path: path,
  gulp: gulp,
  plugins: plugins
}



//эта функция делает два события, смотрит изминения и вызывает втарым параметром импортированную функцию, в которой настройки(что делать, когда сделал какое то действие)
function watcher(){
  gulp.watch(path.watch.files, copy);
  gulp.watch(path.watch.html, html);
  gulp.watch(path.watch.scss, scss);
  gulp.watch(path.watch.js, js);
  gulp.watch(path.watch.img, img);
} 

export {svgSprite} 

//?построение СЦЕНАРИЕВ (при изминении файлов, будет скопировано все, что изменилось и ватчер покажет это в терминале)

const fonts = gulp.series(otfToTtF, ttfToWoff, fontsStyle)
// задачи которые нужно одновременно выполнять
const mainTasks = gulp.series(fonts, gulp.parallel(copy, html, scss, js, img))


//(.series - что то типо асинхронности)
const dev = gulp.series(reset, mainTasks, gulp.parallel( watcher,server ))

const build = gulp.series(reset, mainTasks)

// const deployZip = gulp.series(reset, mainTasks, zip)

const deployFtp = gulp.series(reset, mainTasks, ftp)


// Экспорт сценариев
export {dev}
export {build}
// export {deployZip}
export {deployFtp}

// выполнение сценария по умолчанию (COPY-файл, который копирует файлы с кодом в релиз)
 gulp.task('default', dev);


 

// function defaultTask(cb) {
//     cb();
//   }
  
//   exports.default = defaultTask