import * as _ from 'lodash';

// 对比 | 第一个 | 一维数组
/** _.differenceBy(array, [values], [iteratee=_.identity]) => array
 * This method is like _.difference except that it accepts iteratee(迭代器) which is invoked for each element of array and values to generate the criterion(标准) by which they're compared. The order and references of result values are determined by the first array. The iteratee is invoked with one argument:(value). 
 * 对比数组，找出第一个数组中不同于第二个数组中的元素(case1)
 * 第三个参数为迭代器，可以是工具函数(case1)，也可以是一个键名(case2)
 * @param: [array]{Array} 原数组
 * @param: [[values]]{Array} 比对数组
 * @param: [iteratee]{Function|String|Number} 迭代器
 * @return: [array]{Array} 结果数组
*/

type T = any;
type U = Array<T>;
type E = string | number | ( (x: any) => number );

// 迭代器为工具函数
namespace case1 {
  const array: Array<T> = [ 2.1, 1.3, 2.5 ];
  const iteratee: E = Math.round;
  const result: Array<U> = _.differenceBy(array, [ 1.6, 2.4 ], iteratee);
  console.log('case1: ', result); // [ 1.3, 2.5 ]
}

// 迭代器为对象的键名
namespace case2 {
  const array: Array<T> = [ { x: 2 }, { x: 1 } ];
  const iteratee: E = 'x';
  const result: Array<U> = _.differenceBy(array, [ { x: 3 }, { x: 2 } ], iteratee);
  console.log('case2: ', result); // [ { x: 1 } ]
}
