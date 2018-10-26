import * as _ from 'lodash';

// 合并 | 二维平铺 | 多维数组
/** _.concat(array, values...) => array
 * Creates a new array concatenating array with any additional arrays and/or values.
 * 合并数组。
 * 普通元素直接合并。抽离一维数组的元素合并。
 * @param: [array]{Array} 原数组
 * @param: [values]{Any} 待合并元素
 * @return: [array]{Array} 结果数组
*/

type T = any;
type U = Array<T>;

const array: Array<T> = [ 1 ];

const result: Array<U> = _.concat(array, 2, '3', false, [ 5 ], [ 6, [ 7 ] ], { a: 1 });

console.log(result); // [ 1, 2, '3', false, 5, 6, [ 7 ], { a: 1 } ]