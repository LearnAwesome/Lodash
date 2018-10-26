import * as _ from 'lodash';

// 剔除 | 逆向
/** _.dropRight(array, [n=1]) => array
 * Creates a slice of array with n elements dropped from the end.
 * 从最后第一位开始，剔除指定位数数组元素(case1)
 * 不指定位数，默认剔除第一个(case2)
 * 指定位数超过数组长度，返回空数组(case3)
 * 指定位数为0，返回原数组(case4)
 * @param: [array]{Array} 原数组
 * @param: [n]{Number} 指定位数
 * @return: [array]{Array} 结果数组
*/

type T = any;
type U = Array<T>;

// 从最后第一位开始，剔除指定位数数组元素
namespace case1 {
  const array: Array<T> = [ 1, 2, 3 ];
  const result: Array<U> = _.dropRight(array, 2);
  console.log('case1: ', result); // [ 1 ]
}

// 不指定位数，默认剔除第一个
namespace case2 {
  const array: Array<T> = [ 1, 2, 3 ];
  const result: Array<U> = _.dropRight(array);
  console.log('case2: ', result); // [ 1, 2 ]
}

// 指定位数超过数组长度，返回空数组
namespace case3 {
  const array: Array<T> = [ 1, 2, 3 ];
  const result: Array<U> = _.dropRight(array, 5);
  console.log('case3: ', result); // []
}

// 指定位数为0，返回原数组
namespace case4 {
  const array: Array<T> = [ 1, 2, 3 ];
  const result: Array<U> = _.dropRight(array, 0);
  console.log('case4: ', result); // [ 1, 2, 3 ]
}