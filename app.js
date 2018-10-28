console.log(
  '------------------file app.js--------------------'
);
var objects = [
  {
    id: 11,
    name: 'romantic1'
  },
  {
    id: 22,
    name: 'romantic2'
  },
  {
    id: 33,
    name: 'romantic3'
  }
];

const obj1 = {
  id: 111,
  name: 'romantic'
};

// const ids = objects.map(obj => obj.id);
// console.log('ids', ids);

// var get = curry(function(prop, obj) {
//   return obj[prop];
// });

// const get = curry((prop, obj) => obj[prop]);
// console.log('get-name', get('name', obj1));
// console.log('get-id', get('id', obj1));

/**
 * เพราะ get รับ argument 2 ตัวคือ prop, obj
 * การ map แต่ละรอบ prop คือ key ที่ต่องการเช่น id, name
 * และ obj คือ obj แต่ละตัวที่อยู่ใน array [{obj},{obj},{obj}]
 * ซึ่งจะได้ค่าทุกรอบที่ทำการ map
 */
//when use map funtion now invoded like this get('id', obj)
// const getIds = objects.map(get('id'));
//when use map funtion now invoded like this get('name', obj)
// const getNames = objects.map(get('name'));
// console.log('getIds', getIds);
// console.log('getNames', getNames);

// var map = curry(function(fn, values) {
//   return values.map(fn);
// });
// const map = curry((fn, values) => values.map(fn));

/**
 * getIds(), getNames จะยังไม่ถูก Invoked
 * เพราะ arguments ยังไม่ครบสองตัว(map ต้องการ 2 arguments)
 *  */

// const getIds = map(get('id'));
// const getNames = map(get('name'));
/**
 * invoking getIds, getName โดยการ
 * ส่งค่า objects เข้าไป
 */
// console.log('ids', getIds(objects));
// console.log('names', getNames(objects));
