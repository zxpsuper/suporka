"use strict";
exports.__esModule = true;
/**
 *
 * @desc 生成指定范围随机数
 * @param  {Number} min
 * @param  {Number} max
 * @return {Number}
 */
function randomNum(min, max) {
    return Math.floor(min + Math.random() * (max - min));
}
exports["default"] = randomNum;
