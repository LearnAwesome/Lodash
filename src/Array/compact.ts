import * as _ from 'lodash';

/** _.compact(array)
 * Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.
 * 剔除数组中可以被隐式转换为false的元素。
 * 隐式转换为false的元素：false, null, 0, "", undefined, NaN
*/

type T = any;
type U = Array<T>;

const array: Array<T> = [ 0, 1, false, 2, '', 3 ];

const result: Array<U> = _.compact(array);

console.log(result); // [ 1, 2, 3 ]