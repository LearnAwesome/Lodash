import _ from 'lodash';

// 扁平化 | 深度
/** _.flattenDeep(array) => array
 * Recursively flattens array.
 * 扁平化数组，力度深
 * @param: [array]{Array} 原数组
 * @return: [array]{Array} 结果数组
 */

type T = any;
type U = Array<T>;

const array: U = [ 1, [ 2, [ 3, [ 4 ] ] ], 5 ];
const result: U = _.flattenDeep(array);

console.log(result); // [ 1, 2, 3, 4, 5 ]