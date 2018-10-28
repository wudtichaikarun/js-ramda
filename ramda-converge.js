console.log(
  '------------------file ramda-coverge.js--------------------'
);

// ต้องการเช็คว่า array[0] มีค่ามากที่สุดใช่หรือไม่
const isValidArr = [6, 3, 4, 5, 2, 1];
const isInvalidArr = [2, 5, 4, 5, 7, 1];

// pure js
// const isFirstEleBiggest = ele =>
//   ele[0] === ele.sort((a, b) => b - a)[0];

const sortByBiggestFirst = R.sort(R.descend(R.identity));
// const sortByBiggestFirst = R.compose(
//   R.sort,
//   R.descend,
//   R.identity
// );
const isFirstEleBiggest = R.converge(R.equals, [
  R.head, //ele => ele[0],
  R.compose(
    R.head,
    sortByBiggestFirst //R.sort(R.descend(R.identity))
  )
  //ele => R.head(R.sort(R.descend(R.identity))(ele))
  //ele => R.head(ele.sort((a, b) => b - a))
  //ele => ele.sort((a, b) => b - a)[0]
]);

console.log(
  'first element is Biggest :',
  isFirstEleBiggest(isValidArr)
);
console.log(
  'first element is Biggest :',
  isFirstEleBiggest(isInvalidArr)
);
