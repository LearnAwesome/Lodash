import _ from 'lodash';

// 剔除 | 分散目标 | 副作用
/** _.pull(array, [values...]) => array
 * Removes all given values from array using SameValueZero for equality comparisons. This method mutates array.
 * 从数组中剔除指定元素，返回原数组
 * @param: [array]{Array} 原数组
 * @param: [values]{Any} 移除项
 * @return: [array]{Array} 原数组
 */

const array = [ 1, 2, 3, 2, 4, 3 ];
const result = _.pull(array, 2, 3);

console.log(result); // [ 1, 4 ]
console.log(array); // [ 1, 4 ]
console.log(result === array); // true