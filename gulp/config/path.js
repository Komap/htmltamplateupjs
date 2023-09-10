
// const path = require('path'); ../gulp/config/path.js
import * as nodePath from 'path'
const rootF = nodePath.basename(nodePath.resolve());

// все файлы ,в которых функции и тд, в основном импортируются в gulpfile

const buildF = './dist'; // 
const srcF = './src'; // 

export const path = {
    src: {
        js: `${srcF}/js/app.js`,
        html: `${srcF}/*.html`,
        //путь с папки, с которой буду копироватьы(*.* - любые назвния с любым расширением)
        files: `${srcF}/files/**/*.*`,
        scss: `${srcF}/scss/style.scss`,
        img: `${srcF}/img/**/*.{jpg,png,jpeg,gif,webp}`,
        svg: `${srcF}/img/**/*.svg`,
        svgicons: `${srcF}/svgSprite/*.svg`,
    },
    build: {
        html: `${buildF}/`,
        files: `${buildF}/files`,
        css: `${buildF}/css/`,
        img: `${buildF}/img/`,
        js: `${buildF}/js/`,
        fonts: `${buildF}/fonts/`,
    },
    watch: {
        html: `${srcF}/**/*.html`,
        files: `${srcF}/files/**/*.*`,
        scss: `${srcF}/scss/**/*.scss`,
        js: `${srcF}/js/**/*.js`,
        img: `${srcF}/img/**/*.{jpg,png,jpeg,gif,webp,svg,gif,ico}`,
    },
    clean: buildF,
    buildF: buildF,
    srcF: srcF,
    rootF: rootF,
    ftp: ''
}