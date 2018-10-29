import _ from 'lodash';

// 扁平化 | 指定力度
/** _.flattenDepth(array, [depth=1]) => array
 * Recursively flatten array up to depth times.
 * 扁平化数组，力度指定
 * @param: [array]{Array} 原数组
 * @param: [depth]{Number} 深度
 * @return: [array]{Array} 结果数组
 */

type T = any;
type U = Array<T>;
type Y = number;

const array: U = [ 1, [ 2, [ 3, [ 4 ] ] ], 5 ];

// depth = 2
namespace case1 {
    const depth: Y = 2;
    const result: U = _.flattenDepth(array, depth);
    console.log('case1: ', result); // [ 1, 2, 3, [ 4 ], 5 ]
}

// depth = 3
namespace case1 {
    const depth: Y = 3;
    const result: U = _.flattenDepth(array, depth);
    console.log('case2: ', result); // [ 1, 2, 3, 4, 5 ]
}
