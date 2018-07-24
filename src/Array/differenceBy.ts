import * as _ from 'lodash';

/** _.differenceBy(array, [values], [iteratee=_.identity])
 * This method is like _.difference except that it accepts iteratee which is invoked for each element of array and values to generate the criterion by which they're compared. The order and references of result values are determined by the first array. The iteratee is invoked with one argument:(value). 
 * 对比数组，找出第一个数组中不同于第二个数组中的元素
 * 第三个参数为解析器，类型为一个值(可以是工具函数的返回值)
*/

type T = any;
type U = Array<T>;
type E = string | number | ( (x: any) => number );

namespace case1 {
  const array: Array<T> = [ 2.1, 1.3 ];
  const iteratee: E = Math.round;
  const result: Array<U> = _.differenceBy(array, [ 1.6, 2.4 ], iteratee);
  console.log(result); // [ 1.3 ]
}

namespace case2 {
  const array: Array<T> = [ { x: 2 }, { x: 1 } ];
  const iteratee: E = 'x';
  const result: Array<U> = _.differenceBy(array, [ { x: 3 }, { x: 2 } ], iteratee);
  console.log(result); // [ 1.3 ]
}