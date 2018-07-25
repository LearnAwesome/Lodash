import * as _ from 'lodash';

/** _.drop(array, [n=1])
 * Creates a slice of array with n elements dropped from the beginning.
 * 移除数组元素
 * 从第一位开始
*/

type T = any;
type U = Array<T>;

namespace case1 {
  const array: Array<T> = [ 1, 2, 3 ];
  const result: Array<U> = _.drop(array);
  console.log(result); // [ 2, 3 ]
}

namespace case2 {
  const array: Array<T> = [ 1, 2, 3 ];
  const result: Array<U> = _.drop(array, 2);
  console.log(result); // [ 3 ]
}

namespace case3 {
  const array: Array<T> = [ 1, 2, 3 ];
  const result: Array<U> = _.drop(array, 5);
  console.log(result); // []
}

namespace case4 {
  const array: Array<T> = [ 1, 2, 3 ];
  const result: Array<U> = _.drop(array, 0);
  console.log(result); // [ 1, 2, 3 ]
}