import * as _ from 'lodash';

// 剔除 | 正向
/** _.drop(array, [n=1]) => array
 * Creates a slice of array with n elements dropped from the beginning.
 * 从第一位开始，剔除指定位数的数组元素(case1)
 * 不指定位数，默认剔除第一个(case2)
 * 指定位数超过数组长度，返回空数组(case3)
 * 指定位数为0，返回原数组(case4)
 * @param: [array]{Array} 原数组
 * @param: [n]{Number} 剔除位数
 * @return: [array]{Array} 结果数组
*/

type T = any;
type U = Array<T>;

// 从第一位开始，剔除指定位数的数组元素
namespace case1 {
  const array: Array<T> = [ 1, 2, 3 ];
  const result: Array<U> = _.drop(array, 2);
  console.log('case1: ', result); // [ 3 ]
}

// 不指定位数，默认剔除第一个
namespace case2 {
  const array: Array<T> = [ 1, 2, 3 ];
  const result: Array<U> = _.drop(array);
  console.log('case2: ', result); // [ 2, 3 ]
}

// 指定位数超过数组长度，返回空数组
namespace case3 {
  const array: Array<T> = [ 1, 2, 3 ];
  const result: Array<U> = _.drop(array, 5);
  console.log('case3: ', result); // []
}

// 指定位数为0，返回原数组
namespace case4 {
  const array: Array<T> = [ 1, 2, 3 ];
  const result: Array<U> = _.drop(array, 0);
  console.log('case4: ', result); // [ 1, 2, 3 ]
}