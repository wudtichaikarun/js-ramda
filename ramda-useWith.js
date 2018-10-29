console.log(
  '------------------file ramda-useWith.js--------------------'
);

const array = [1, 3, 5, 3, 4, 1];

const firstAndLastEqual = R.converge(R.equals, [
  R.head,
  R.last
])(array);

// const maxValue = R.useWith(R.max, [R.inc, R.dec])(2, 6);

console.log('original array :', array);
// console.log('maxValue', maxValue);
console.log('firstAndLastEqual :', firstAndLastEqual);
