/*eslint valid-jsdoc: "off"*/
'use strict';

function someCall () {
  return new Promise(resolve => {
    console.log('start call starts');
    setTimeout(() => {
      console.log('first call end');
    }, 2000);
  });
}

function anotherCall () {
  return new Promise(resolve => {
    console.log('second call starts');
    setTimeout(() => {
      console.log('second call end');
    }, 1000);
  });
}

exports.function1 = async function () {
  const someResult = someCall();
  const anotherResult = anotherCall();
  await Promise.all([someResult, anotherResult]);
};
