const curry = function(fn) {
  var arity = fn.length;
  // console.log('arite', arity);
  return function f1(...args) {
    // console.log('f1 args and arity', args, arity);
    if (args.length >= arity) {
      // console.log('enough arguments');
      return fn(...args);
    } else {
      // console.log('need more argument');
      return function f2(...moreArgs) {
        // console.log('f2', moreArgs);
        let newArgs = args.concat(moreArgs);
        return f1(...newArgs);
      };
    }
  };
};

const add = (a, b, c) => a + b + c;
const curryAdd = curry(add);
// const result = curryAdd(1)(2)(3);
// const result = curryAdd(1)(2, 3);
const result = curryAdd(1, 2, 3);

// จะได้ค่า resulte ก็ต่อเมื่อส่ง arguments ไปครบทุกตัว
console.log('result', result);
const concatEx = [1, 2].concat(3);
console.log('concatEx. ', concatEx);
