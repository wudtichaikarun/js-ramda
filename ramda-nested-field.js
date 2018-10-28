console.log(
  '------------------file ramda-nested-field.js--------------------'
);
const bill = {
  nicknname: 'bill',
  country: 'TH',
  personal: {
    profile: {
      name: 'Bill',
      surname: 'Williams',
      age: 20
    }
  }
};

const mike = {
  nicknname: 'Mike',
  country: 'US',
  personal: {}
};

// error if surname is undefiend
// const getSurName = user => user.personal.profile.surname;
// console.log('getSurName :', getSurName(mike));

/**
 * fix error when surname is undefiend
 * but very bad code it's hard to readable
 */
// const getSurName = user =>
//   user &&
//   user.personal &&
//   user.personal.profile &&
//   user.personal.profile.surname;

/**
 *  use ramda to sold this problem
 * if not defined function will return value = undefined
 */
// const getSurName = user =>
//   R.path(['personal', 'profile', 'surname'], user);

// if want to return string 'not set value' if value = undefined
const getSurName = user =>
  R.pathOr(
    'not set value',
    ['personal', 'profile', 'surname'],
    user
  );

console.log('getSurName :', getSurName(bill));
console.log('getSurName :', getSurName(mike));
