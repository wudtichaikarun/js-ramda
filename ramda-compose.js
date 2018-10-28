console.log(
  '------------------file ramda-compose.js--------------------'
);
/**
 * purpose this-is-composition
 */

/**
 * use pure js version 1
 */
// const toSlug = str => {
//   const words = str.split(' ');
//   const lowercased = words.map(word => word.toLowerCase());
//   const slug = lowercased.join('-');
//   const encodeSlug = encodeURIComponent(slug);
//   return encodeSlug;
// };

/**
 * use pure js version 2
 */
// const toSlug = input =>
//   encodeURIComponent(
//     input
//       .split(' ')
//       .map(str => str.toLowerCase())
//       .join('-')
//   );

/**
 * with ramda hoc
 * very hard to read
 */
// const toSlug = input =>
//   encodeURIComponent(
//     R.join('-')(R.map(R.toLower)(R.split(' ')(input)))
//   );

/**
 * with ramda composition
 * invoked from right to left (bottom to top)
 */
// const toSlug = input =>
//   R.compose(
//     encodeURIComponent,
//     R.join('-'),
//     R.map(R.toLower),
//     R.split(' ')
//   )(input);
const toSlug = R.compose(
  encodeURIComponent,
  R.join('-'),
  R.map(R.toLower),
  R.split(' ')
);

const slug = toSlug('This is composition');
console.log('slug :', slug);
