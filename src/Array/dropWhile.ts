import * as _ from 'lodash';

/** _.dropWhile(array, [predicate=_.identity])
 * Creates a slice of array excluding elements dropped from the beginning. Elements are dropped until predicate returns falsey. The predicate is invoked with three arguments: (value, index, array).
 * 移除数组元素
 * 从第一位开始
 * 可以传入一个匹配函数
 */

interface User<T = string, U = boolean> {
  user: T;
  active: U;
}

namespace case1 {
  const array: Array<User> = [
    { user: 'barney', active: false },
    { user: 'fred', active: false },
    { user: 'pebbles', active: true }
  ];
  const result: Array<User> = _.dropWhile(array, item => !item.active);
  console.log(result); // [ { user: 'pebbles', active: true } ]
}

namespace case2 {
  const array: Array<User> = [
    { user: 'barney', active: false },
    { user: 'fred', active: false },
    { user: 'pebbles', active: true }
  ];
  const result: Array<User> = _.dropWhile(array, { user: 'barney', active: false });
  console.log(result); // [ { user: 'fred', active: false }, { user: 'pebbles', active: true } ]
}

namespace case3 {
  const array: Array<User> = [
    { user: 'barney', active: false },
    { user: 'fred', active: false },
    { user: 'pebbles', active: true }
  ];
  const result: Array<User> = _.dropWhile(array, ['active', false]);
  console.log(result); // [ { user: 'pebbles', active: true } ]
}

namespace case4 {
  const array: Array<User> = [
    { user: 'barney', active: false },
    { user: 'fred', active: false },
    { user: 'pebbles', active: true }
  ];
  const result: Array<User> = _.dropWhile(array, 'active');
  console.log(result); // [ { user: 'barney', active: false }, { user: 'fred', active: false }, { user: 'pebbles', active: true } ]
}
