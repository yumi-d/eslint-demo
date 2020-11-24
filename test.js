/*
 * @Author: dengyulai
 * @Date: 2020-10-26 14:57:17
 * @LastEditTime: 2020-11-24 14:29:30
 * @LastEditors: yumi
 * @Description:
 * @FilePath: /eslint-demo/test.js
 */
const a = { a: 1, b: 2 };
const b = { name: 'b', ...a };
console.log(a);
console.log(b);

const { x, y, ...z } = {
  x: 1, y: 2, a: 3, b: 4,
};
console.log(z);
