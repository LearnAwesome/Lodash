import _ from 'lodash';

// 剔除 | 索引 | 副作用
/** _.pullAt(array, [indexes]) => array
 * Removes elements from array corresponding to indexes and returns an array of removed elements. This method mutates array.
 * 从数组中剔除指定索引位的元素，返回原数组
 * @param: [array]{Array} 原数组
 * @param: [indexes]{Array<Number>} 移除项索引值
 * @return: [array]{Array} 原数组
 */

const array = [ 'a', 'b', 'c', 'd' ];
const result = _.pullAt(array, [ 1, 2 ]);

console.log(result); // [ 'b', 'c' ]
console.log(array); // [ 'a', 'd' ]