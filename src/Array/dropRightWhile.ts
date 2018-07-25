import * as _ from 'lodash';

/** _.dropRightWhile(array, [predicate=_.identity])
 * Creates a slice of array excluding elements dropped from the end. Elements are dropped until predicate returns falsey. The predicate is invoked with three arguments: (value, index, array).
 * 移除数组元素
 * 从最后第一位开始
 * 可以传入一个匹配函数
 */

interface User<T = string, U = boolean> {
  user: T;
  active: U;
}

namespace case1 {
  const array: Array<User> = [
    { user: 'barney', active: true },
    { user: 'fred', active: false },
    { user: 'pebbles', active: false }
  ];
  const result: Array<User> = _.dropRightWhile(array, item => !item.active);
  console.log(result); // [ { user: 'barney', active: true } ]
}

namespace case2 {
  const array: Array<User> = [
    { user: 'barney', active: true },
    { user: 'fred', active: false },
    { user: 'pebbles', active: false }
  ];
  const result: Array<User> = _.dropRightWhile(array, { user: 'pebbles', active: false });
  console.log(result); // [ { user: 'barney', active: true }, { user: 'fred', active: false } ]
}

namespace case3 {
  const array: Array<User> = [
    { user: 'barney', active: true },
    { user: 'fred', active: false },
    { user: 'pebbles', active: false }
  ];
  const result: Array<User> = _.dropRightWhile(array, ['active', false]);
  console.log(result); // [ { user: 'barney', active: true } ]
}

namespace case4 {
  const array: Array<User> = [
    { user: 'barney', active: true },
    { user: 'fred', active: false },
    { user: 'pebbles', active: false }
  ];
  const result: Array<User> = _.dropRightWhile(array, 'active');
  console.log(result); // [ { user: 'barney', active: true }, { user: 'fred', active: false }, { user: 'pebbles', active: false } ] ???
}
