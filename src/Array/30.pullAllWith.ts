import _ from 'lodash';

// 剔除 | 数组目标 | 迭代器 | 副作用
/** _.pullAllWith(array, values, [comparator]) => array
 * This method is like _.pullAll except that it accepts comparator which is invoked to compare elements of array to values. The comparator is invoked with two arguments: (arrVal, othVal). This method mutates array.
 * 从数组中剔除指定数组中的元素，返回原数组
 * @param: [array]{Array} 原数组
 * @param: [values]{Array} 移除项数组
 * @param: [comparator]{Function} 迭代器(arrVal, othVal)
 * @return: [array]{Array} 原数组
 */

const array = [ { 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 } ];
const result = _.pullAllWith(array, [ { 'x': 3, 'y': 4 } ], _.isEqual);

console.log(result); // [ { x: 1, y: 2 }, { x: 5, y: 6 } ]
console.log(array); // [ { x: 1, y: 2 }, { x: 5, y: 6 } ]
console.log(result === array); // true