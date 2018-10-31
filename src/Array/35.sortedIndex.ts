import _ from 'lodash';

// 保持顺序 | 插入位置 | 左侧插入
/** _.sortedIndex(array, value) => value
 * Uses a binary search to determine the lowest index at which value should be inserted into array in order to maintain its sort order.
 * 保持数组顺序，利用二进制观察指定数值的左侧插入位置
 * @param: [array]{Array} 原数组
 * @param: [value]{Any} 指定数值
 * @return: [value]{Number} 左侧插入位置
 */

const array = [1, 2, 3, 4, 5];
const result = _.sortedIndex(array, 2);

console.log(result); // 1