import _ from 'lodash';

// 剔除 | 数组目标 | 副作用
/** _.pullAll(array, values) => array
 * This method is like _.pull except that it accepts an array of values to remove. This method mutates array.
 * 从数组中剔除指定数组中的元素，返回原数组
 * @param: [array]{Array} 原数组
 * @param: [values]{Array} 移除项数组
 * @return: [array]{Array} 原数组
 */

const array = [ 1, 2, 3, 2, 4, 3 ];
const result = _.pullAll(array, [ 2, 3 ]);

console.log(result); // [ 1, 4 ]
console.log(array); // [ 1, 4 ]
console.log(result === array); // true