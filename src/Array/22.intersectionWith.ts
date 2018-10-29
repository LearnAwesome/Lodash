import _ from 'lodash';

// 交集 | 迭代器
/** _.intersectionWith(array..., [comparator]) => [array]
 * This method is like _.intersection except that it accepts comparator which is invoked to compare elements of arrays. The order and references of result values are determined by the first array. The comparator is invoked with two arguments: (arrVal, othVal).
 * 取多个数组的交集，根据第一个数组决定结果数组的顺序。
 * 第三个参数为迭代器，为工具函数
 * @param: [array]{Array} 原数组
 * @param: [comparator]{Function} 迭代器 
 * @return: [array]{Array} 结果数组
 */

const objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
const others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
const comparator = _.isEqual;
const result = _.intersectionWith(objects, others, comparator);
console.log(result); // [ { x: 1, y: 2 } ]