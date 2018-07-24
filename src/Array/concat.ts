import * as _ from 'lodash';

/** _.concat(array, [values])
 * Creates a new array concatenating array with any additional arrays and/or values.
 * 合并数组。
 * 普通元素直接合并。抽离一维数组的元素合并。
*/

type T = any;
type U = Array<T>;

const array: Array<T> = [ 1 ];

const result: Array<U> = _.concat(array, 2, '3', false, [ 5 ], [ 6, [ 7 ] ], { a: 1 });

console.log(result); // [ 1, 2, '3', false, 5, 6, [ 7 ], { a: 1 } ]