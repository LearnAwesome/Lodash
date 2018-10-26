import * as _ from 'lodash';

// 对比 | 第一个 | 一维数组
/** _.difference(array, [values]) => array
 * Creates an array of array values not included in the other given arrays using SameValueZero for equality comparisons. The order and references of result values are determined by the first array. 
 * 对比数组，找出第一个数组中不同于第二个数组中的元素
 * @param: [array]{Array} 原数组
 * @param: [[values]]{Array} 比对数组
 * @return: [array]{Array} 结果数组
*/

type T = any;
type U = Array<T>;

const array: Array<T> = [ 1, 2 ];

const result: Array<U> = _.difference(array, [2, 3, 4]);

console.log(result); // [ 1 ]