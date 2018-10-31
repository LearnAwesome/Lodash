import _ from 'lodash';

// 保持顺序 | 插入位置 | 右侧插入
/** _.sortedLastIndex(array, value) => value
 * This method is like _.sortedIndex except that it returns the highest index at which value should be inserted into array in order to maintain its sort order.
 * 保持数组顺序，利用二进制观察指定数值的右侧插入位置
 * @param: [array]{Array} 原数组
 * @param: [value]{Any} 指定数值
 * @return: [value]{Number} 右侧插入位置
 */

const array = [1, 2, 3, 4, 5];
const result = _.sortedLastIndex(array, 2);

console.log(result); // 2