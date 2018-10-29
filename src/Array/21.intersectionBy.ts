import _ from 'lodash';

// 交集 | 迭代器
/** _.intersectionBy(array..., [interatee=_.identity]) => [array]
 * This method is like _.intersection except that it accepts iteratee which is invoked for each element of each arrays to generate the criterion by which they're compared. The order and references of result values are determined by the first array. The iteratee is invoked with one argument:(value).
 * 取多个数组的交集，根据第一个数组决定结果数组的顺序。
 * 第三个参数为迭代器，可以是工具函数(case1)，也可以是一个键名(case2)
 * @param: [array]{Array} 原数组
 * @param: [interatee]{String | number | Function} 迭代器 
 * @return: [array]{Array} 结果数组
 */

type E = string | number | ( (x: any) => number );

// 迭代器为工具函数
namespace case1 {
    const interatee: E = Math.floor;
    const result = _.intersectionBy(
        [ 2.1, 1.2 ], [ 2.3, 3.4 ],
        interatee
    );
    console.log('case1: ', result); // [ 2.1 ]
}

// 迭代器
namespace case2 {
    const interatee: E = 'x';
    const result = _.intersectionBy(
        [ { x: 1 }, { x: 2 } ], [ { x: 1 } ],
        interatee
    );
    console.log('case2: ', result); // [ { x: 1 } ]
}