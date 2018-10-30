import _ from 'lodash';

// 剔除 | 数组目标 | 迭代器 | 副作用
/** _.pullAllBy(array, values, [iteratee=_.identity]) => array
 * This method is like _.pullAll except that it accepts iteratee which is invoked for each element of array and values to generate the criterion by which they're compared. The iteratee is invoked with one argument: (value). This method mutates array.
 * 从数组中剔除指定数组中的元素，返回原数组
 * @param: [array]{Array} 原数组
 * @param: [values]{Array} 移除项数组
 * @param: [iteratee]{Function} 迭代器(value)
 * @return: [array]{Array} 原数组
 */

const array = [ { 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 } ];
const result = _.pullAllBy(array, [ { 'x': 1 }, { 'x': 3 } ], 'x');

console.log(result); // [ { x: 2 } ]
console.log(array); // [ { x: 2 } ]
console.log(result === array); // true