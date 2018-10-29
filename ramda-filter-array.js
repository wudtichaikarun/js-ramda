console.log(
  '------------------file ramda-filter-appay.js--------------------'
);

const products = [
  {
    name: 'Jacket',
    price: 50,
    category: 'clothes',
    count: 20
  },
  {
    name: 'Boots',
    price: 120,
    category: 'clothes',
    count: 30
  },
  {
    name: 'Iphone',
    price: 600,
    category: 'clothes',
    count: 10
  }
];

// const getProductNames = items => {
//   const filterItems = items.filter(
//     item =>
//       item.category === 'clothes' &&
//       item.count < 50 &&
//       item.price < 100
//   );

//   return filterItems.map(item => item.name);
// };

const getProductNames = R.compose(
  R.pluck('name'),
  // R.filter(
  //   item =>
  //     item.category === 'clothes' &&
  //     item.count < 50 &&
  //     item.price < 100
  // )
  R.filter(
    R.where({
      category: R.equals('clothes'),
      count: R.lt(R.__, 50),
      price: R.lt(R.__, 100)
    })
  )
);

console.log('getProductNames', getProductNames(products));
