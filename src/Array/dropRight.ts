import * as _ from 'lodash';

/** _.dropRight(array, [n=1])
 * Creates a slice of array with n elements dropped from the end.
 * 移除数组元素
 * 从最后第一位开始
*/

type T = any;
type U = Array<T>;

namespace case1 {
  const array: Array<T> = [ 1, 2, 3 ];
  const result: Array<U> = _.dropRight(array);
  console.log(result); // [ 1, 2 ]
}

namespace case2 {
  const array: Array<T> = [ 1, 2, 3 ];
  const result: Array<U> = _.dropRight(array, 2);
  console.log(result); // [ 1 ]
}

namespace case3 {
  const array: Array<T> = [ 1, 2, 3 ];
  const result: Array<U> = _.dropRight(array, 5);
  console.log(result); // []
}

namespace case4 {
  const array: Array<T> = [ 1, 2, 3 ];
  const result: Array<U> = _.dropRight(array, 0);
  console.log(result); // [ 1, 2, 3 ]
}