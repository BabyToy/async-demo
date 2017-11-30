/*eslint valid-jsdoc: "off"*/
'use strict';

async function promise (caption) {
  let response;
  response = await new Promise((resolve, reject) => {
    resolve(caption);
  });
  console.log('Processing', response);
  return response;
}

exports.function1 = function () {
  const captions = ['one', 'two', 'three', 'four', 'five'];
  let promises = [];

  for (let caption of captions) {
    let promiseResult = promise(caption);
    promises.push(promiseResult);
  }

  Promise.all(promises).then(values => {
    console.log(values);
    console.log('phase 2');
  });
};
