import replace from "gulp-replace";
// plumber и notify для всплывающего окна с ошибкой (показывает где ошибка)
import plumber from "gulp-plumber";
import notify from "gulp-notify";
import browsersync from "browser-sync";
//gulp-newer запускают таски только для изменившихся файлов.
import newer from "gulp-newer";
// плагин для режима разраба и продакт
import ifPlugin from "gulp-if";

export const plugins = {
    replace: replace,
    plumber: plumber,
    notify: notify,
    browsersync: browsersync,
    newer: newer,
    if: ifPlugin
}