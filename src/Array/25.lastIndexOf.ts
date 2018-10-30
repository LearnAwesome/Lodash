import _ from 'lodash';

// 索引 | 搜索
/** _.lastIndexOf(array, value, [fromIndex=array.length-1]) => array
 * This method is like _.indexOf except that it iterates over elements of array from right to left.
 * 从右侧开始，查找符合的元素的索引值
 * @param: [array]{Array} 原数组
 * @param: [value]{Any} 查找项
 * @param: [fromIndex]{Number} 起始位置
 * @return: [array]{Array} 结果数组
 */

const array = [ 1, 2, 3, 2 ];

// 默认起始位置
namespace case1 {
    const result = _.lastIndexOf(array, 2);
    console.log('case1: ', result); // 3
}

// 指定起始位置
namespace case1 {
    const result = _.lastIndexOf(array, 2, 1);
    console.log('case2: ', result); // 1
}