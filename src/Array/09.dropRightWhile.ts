import * as _ from 'lodash';

// 剔除 | 逆向 | 迭代器
/** _.dropRightWhile(array, [predicate=_.identity]) => array
 * Creates a slice of array excluding elements dropped from the end. Elements are dropped until predicate returns falsey. The predicate is invoked with three arguments: (value, index, array).
 * 从最后第一位开始，根据传入的迭代器移除数组元素，直到迭代器返回falsey停止
 * 迭代器可以是值，索引，数组以及工具函数
 * @param: [array]{Array} 原数组
 * @param: [predicate]{String|Number|Boolean|Function|{key:value}|Array} 迭代器
 * @return: [array]{Array}
 */

interface User<T = string, U = boolean> {
  user: T;
  active: U;
}

// 迭代器为工具函数，并且剔除了一些数组成员
namespace case1 {
  const array: Array<User> = [
    { user: 'barney', active: true },
    { user: 'fred', active: false },
    { user: 'pebbles', active: false }
  ];
  const result: Array<User> = _.dropRightWhile(array, item => !item.active);
  console.log('case1: ', result); // [ { user: 'barney', active: true } ]
}

// 迭代器为工具函数，迭代器在一开始即返回falsey，无成员剔除
namespace case2 {
  const array: Array<User> = [
    { user: 'barney', active: true },
    { user: 'fred', active: false },
    { user: 'pebbles', active: true }
  ];
  const result: Array<User> = _.dropRightWhile(array, item => !item.active);
  console.log('case2: ', result); // [ { user: 'barney', active: true }, { user: 'fred', active: false }, { user: 'pebbles', active: true } ]
}

// 迭代器为索引，根据具体对象进行剔除
namespace case3 {
  const array: Array<User> = [
    { user: 'barney', active: true },
    { user: 'fred', active: false },
    { user: 'pebbles', active: false }
  ];
  const result: Array<User> = _.dropRightWhile(array, { user: 'pebbles', active: false });
  console.log('case3: ', result); // [ { user: 'barney', active: true }, { user: 'fred', active: false } ]
}

// 迭代器为数组，根据键值进行剔除
namespace case4 {
  const array: Array<User> = [
    { user: 'barney', active: true },
    { user: 'fred', active: false },
    { user: 'pebbles', active: false }
  ];
  const result: Array<User> = _.dropRightWhile(array, ['active', false]);
  console.log('case4: ', result); // [ { user: 'barney', active: true } ]
}

// 迭代器为具体值，根据键名进行剔除，并且剔除了一些数组成员
namespace case5 {
  const array: Array<User> = [
    { user: 'barney', active: true },
    { user: 'fred', active: false },
    { user: 'pebbles', active: false }
  ];
  const result: Array<User> = _.dropRightWhile(array, 'user');
  console.log('case5: ', result); // []
}

// 迭代器为具体值，根据键名进行剔除，无成员剔除
namespace case6 {
  const array: Array<User> = [
    { user: 'barney', active: true },
    { user: 'fred', active: false },
    { user: 'pebbles', active: false }
  ];
  const result: Array<User> = _.dropRightWhile(array, 'active');
  console.log('case6: ', result); // [ { user: 'barney', active: true }, { user: 'fred', active: false }, { user: 'pebbles', active: false } ]
}
