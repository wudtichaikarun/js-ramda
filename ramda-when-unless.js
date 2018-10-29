console.log(
  '------------------file ramda-when-unless.js--------------------'
);

// const truncate = str => {
//   let truncatedStr;

//   if (str.length > 10) {
//     truncatedStr = str.substring(0, 10);
//     truncatedStr = `${truncatedStr}...`;
//   } else {
//     truncatedStr = str;
//   }

//   return truncatedStr;
// };

// return arg2 if arg1 true
// return input if arg1 false
const truncate = R.when(
  R.compose(
    R.gt(R.__, 10),
    R.prop('length')
  ), //str => str.length > 10,
  R.compose(
    R.concat(R.__, '...'),
    R.take(10)
  )
);

// R.unless oposit R.whenn
// return arg2 if arg 1 false
// return input if arg 1 true
// const truncate = R.unless(
//   R.compose(
//     R.gt(R.__, 10),
//     R.prop('length')
//   ), //str => str.length > 10,
//   R.compose(
//     R.concat(R.__, '...'),
//     R.take(10)
//   )
// );
console.log(truncate('12345'));
console.log(truncate('12345678910'));
