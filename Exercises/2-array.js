'use strict';

const array = () => {
  const arr = [];
  const func = (a) => arr[a];
  func.push = (a) => arr.push(a);
  func.pop = () => arr.pop();
  return func;
};

module.exports = { array };
