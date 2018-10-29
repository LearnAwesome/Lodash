import _ from 'lodash';

// 交集
/** _.intersection(array...) => [array]
 * Creates an array of unique values that are included in all given arrays using SameValueZero for equality comparisons. The order and references of result values are determined by the first array.
 * 取多个数组的交集，根据第一个数组决定结果数组的顺序
 * @param: [array]{Array} 原数组
 * @return: [array]{Array} 结果数组
 */

type T = number;
type U = Array<T>;

const origin: U = [ 1, 2, 3 ];
const compared1: U = [ 2, 3, 4 ];
const compared2: U = [ 3, 4, 5 ];
const result: U = _.intersection(origin, compared1, compared2);

console.log(result); // [ 3 ]