import _ from 'lodash';

// 保持顺序 | 插入位置 | 迭代器 | 右侧插入
/** _.sortedLastIndexBy(array, value, [iteratee=_.identity]) => value
 * This method is like _.sortedIndex except that it accepts iteratee which is invoked for value and each element of array to compute their sort ranking. The iteratee is invoked with one argument: (value).
 * 保持数组顺序，利用二进制观察指定数值的右侧插入位置，加入单值迭代器
 * @param: [array]{Array} 原数组
 * @param: [value]{Any} 指定数值
 * @param: [iteratee]{Function} 指定数值
 * @return: [value]{Number} 右侧插入位置
 */

const array = [ {x: 1}, {x: 2} ];
const result = _.sortedLastIndexBy(array, {x: 2}, item => item.x);

console.log(result); // 2