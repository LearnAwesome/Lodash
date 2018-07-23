import * as _ from 'lodash';

/** _.chunk(array, [size=1])
 * Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements.
 * 内部切分组合数组
*/

type T = any;
type U = Array<T>;

const array: Array<T> = ['a', 'b', 'c', 'd'];

const result: Array<U> = _.chunk(array, 2);

console.log(result); // [ [ 'a', 'b' ], [ 'c', 'd' ] ]