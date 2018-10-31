import * as _ from 'lodash';

// 保持顺序 | 插入位置 | 左侧插入 | 正序数组
/** _.sortedIndexOf(array, value) => value
 * This method is like _.indexOf except that it performs a binary search on a sorted array.
 * 保持数组顺序，利用二进制观察指定数值的左侧插入位置，只能用在正序数组中(case1)
 * 如果数组为乱序数组，则返回-1(case2)
 * @param: [array]{Array} 原数组
 * @param: [value]{Any} 指定数值
 * @return: [value]{Number} 左侧插入位置
 */

// 正序数组
namespace case1 {
    const array = [ 1, 2, 3 ];
    const result = _.sortedIndexOf(array, 2);
    console.log('case1: ', result); // 1
}

// 乱序数组
namespace case2 {
    const array = [ 1, 3, 2 ];
    const result = _.sortedIndexOf(array, 2);
    console.log('case2: ', result); // -1
}