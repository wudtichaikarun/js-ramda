console.log(
  '------------------file ramda-basic.js--------------------'
);
const users = [
  {
    id: 1,
    name: 'Romantic1'
  },
  {
    id: 2,
    name: 'Romantic2'
  },
  {
    id: 3,
    name: 'Romantic3'
  },
  {
    id: 4,
    name: 'Romantic4'
  }
];
/***************************************************/

/**
 * with pure js
 */
const romantic1 = users.find(user => user.id === 1);
console.log('romantic1', romantic1);

/**
 * with ramda
 */
// R.propEq() รับ argument 3 ตัวคือ arg1 key, arg2 value, arg3 obje ที่จะตรวจสอบ
// R.propEq('id',2, { id: 2, name: 'romanntic'}) // true
// R.propEq('id',2, { id: 1, name: 'ro'}) // false
const idEquals = R.propEq('id');

const isRomantic2 = idEquals(2);
const isRomantic3 = idEquals(3);
const romantic2 = R.find(isRomantic2, users);
const romantic3 = R.find(isRomantic3, users);

// const isRomantic2 = R.propEq('id', 2)
// const romantic2 = R.find(isRomantic2, users)

// const romantic2 = R.find(R.propEq('id', 2), users);
console.log('romantic2', romantic2);
console.log('romantic3', romantic3);

/***************************************************/
const testUser = {
  age: 20,
  birthCountry: 'TH'
};

// const wasBornInTH = person => person.birthCountry === 'TH';
const wasBornInTH = R.propEq('birthCountry', 'TH');
const wasNaturalized = person =>
  Boolean(person.naturalizationDate);
const isOver18 = person => person.age >= 18;

/**
 * with pure js
 */
// const isCitizen = person =>
//   wasBornInTH(person) || wasNaturalized(person);
// const isEligibleToVote = person =>
//   isOver18(person) && isCitizen(person);

/**
 * with ramda
 */
const isCitizen = R.either(wasBornInTH, wasNaturalized);
const isEligibleToVote = R.both(isOver18, isCitizen);
console.log(
  'is eligible to vote :',
  isEligibleToVote(testUser)
);

// Ex. ramda R.both()
const lessThanTwo = value => value < 2;
const moreThanZero = value => value > 0;

const bothTrue = R.both(lessThanTwo, moreThanZero);
console.log('bothTrue :', bothTrue(1));
/***************************************************/
