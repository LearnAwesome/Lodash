import * as _ from 'lodash';

// 切割 | 重组 | 二维数组
/** _.chunk(array, [size=1]) => array
 * Creates an array of elements split into groups the length of size. If array can't be split evenly(均匀), the final chunk will be the remaining elements.
 * 根据切割尺寸，将原数组中的元素组成子数组，并返回这些子数组组成的数组(case1)。
 * 如果元素不能均匀分配，则最后一个子数组将由剩余的元素组成(case2)。
 * @param: [array]{Array} 原数组
 * @param: [size]{Number} 切分尺寸
 * @return: [array]{Array} 结果数组
*/


type T = any;
type U = Array<T>;

const array: Array<T> = ['a', 'b', 'c', 'd'];

// 根据切割尺寸，将原数组中的元素组成子数组，并返回这些子数组组成的数组
namespace case1 {
    const result: Array<U> = _.chunk(array, 2);
    console.log('case1: ', result); // [ [ 'a', 'b' ], [ 'c', 'd' ] ]
}

// 如果元素不能均匀分配，则最后一个子数组将由剩余的元素组成
namespace case2 {
    const result: Array<U> = _.chunk(array, 3);
    console.log('case2: ', result); // [ [ 'a', 'b', 'c' ], [ 'd' ] ]
}