console.log(
  '-------------file ramda-change-objfield.js---------------'
);

const user = {
  name: 'John',
  surname: 'Flint'
};

// const nameLens = R.lens(R.prop('name'), R.assoc('name'));
// const surenameLens = R.lens(
//   R.prop('surname'),
//   R.assoc('surname')
// );
const nameLens = R.lensProp('name');
const surenameLens = R.lensProp('surname');

const result = R.set(nameLens, 'Romantic', user);
const result2 = R.set(surenameLens, 'Wudtichai', user);

// const name = R.view(nameLens, user);
// const upperName = R.toUpper(name);
// const result3 = R.set(nameLens, upperName, user);
const result3 = R.over(nameLens, R.toUpper, user);

console.log('original object', user);
console.log('result', result);
console.log('result2', result2);
console.log('result3', result3);
