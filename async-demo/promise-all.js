/*eslint valid-jsdoc: "off"*/
'use strict';

var p1 = new Promise((resolve, reject) => {
  resolve('one');
});
var p2 = new Promise((resolve, reject) => {
  resolve('two');
});
var p3 = new Promise((resolve, reject) => {
  resolve('three');
});
var p4 = new Promise((resolve, reject) => {
  resolve('four');
});
var p5 = new Promise((resolve, reject) => {
  resolve('five');
});

/**
 *
 * @param {string} caption
 */
function promise (caption) {
  return new Promise((resolve, reject) => {
    resolve(caption);
  });
}

exports.function1 = function () {
  const captions = ['one', 'two', 'three', 'four', 'five'];
  let promises = [];

  for (let caption of captions) {
    console.log(caption);
    promises.push(promise(caption));
  }

  Promise.all(promises).then(values => {
    console.log(values);
    console.log('phase 2');
  });
};

exports.function2 = function () {
  Promise.all([p1, p2, p3, p4, p5]).then(values => {
    console.log(values);
  }).catch(reason => {
    console.log(reason);
  });
};
