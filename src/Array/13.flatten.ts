import _ from 'lodash';

// 扁平化 | 浅
/** _.flatten(array) => array
 * Flattens array a single level deep.
 * 扁平化数组，力度浅
 * @param: [array]{Array} 原数组
 * @return: [array]{Array} 结果数组
 */

type T = any;
type U = Array<T>;

const array: U = [ 1, [ 2, [ 3, [ 4 ] ] ], 5 ];
const result: U = _.flatten(array);

console.log(result); // [ 1, 2, [ 3, [ 4 ] ], 5 ]