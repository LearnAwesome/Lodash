import * as _ from 'lodash';

// 对比 | 第一个 | 一维数组
/** _.differenceWith(array, [values], [comparator]) => 
 * This method is like _.difference except that it accepts comparator which is invoked to compare elements of array to values. The order and references of result values are determined by the first array. The comparator is invoked with two arguments: (arrVal, othVal). 
 * 对比数组，找出第一个数组中不同于第二个数组中的元素
 * 第三个参数为迭代器，类型为一个函数
 * @param: [array]{Array} 原数组
 * @param: [[values]]{Array} 比对数组
 * @param: [iteratee]{Function|String|Number} 迭代器
 * @return: [array]{Array} 结果数组
*/

type T = any;
type U = Array<T>;
type E = (x: T, y: T) => any;

const array: Array<T> = [ { x: 1, y: 2 }, { x: 2, y: 3 } ];
const comparator: E = _.isEqual;
const result: Array<U> = _.differenceWith(array, [ { x: 2, y: 3 } ], comparator);
console.log(result); // [ { x: 1, y: 2 } ]