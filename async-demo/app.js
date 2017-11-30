/*eslint valid-jsdoc: "off"*/
'use strict';

const pa = require('./promise-all');

pa.function1();
console.log('Done');

// function idler () {
//   return new Promise(resolve => {
//     resolve('done');
//   });
// };

// async function handler () {
//   try {
//     // response = idler();
//     return await idler();
//   } catch (e) {
//     console.error(e);
//   }
// };

// handler()
//   .then(result => {
//     console.log(result);
//   });
// console.log('Done');
