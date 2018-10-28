console.log(
  '------------------file fp-ramda.js--------------------'
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
// const isRomantic2 = R.propEq('id', 2);
// const romantic2 = R.find(isRomantic2, users);
const romantic2 = R.find(R.propEq('id', 2), users);
console.log('romantic2', romantic2);

/***************************************************/
const testUser = {
  age: 20,
  birthCountry: 'TH'
};

const wasBornInTH = person => person.birthCountry === 'TH';
const wasNaturalized = person =>
  Boolean(person.naturalizationDate);
const isOver18 = person => person.age >= 18;

const isCitizen = person =>
  wasBornInTH(person) || wasNaturalized(person);
const isEligibleToVote = person =>
  isOver18(person) && isCitizen(person);

console.log(
  'is eligible to vote :',
  isEligibleToVote(testUser)
);
