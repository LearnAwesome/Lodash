import _ from 'lodash';

// 转化
/** _.fromPairs(pairs) => object
 * The inverse of _.toPairs; this method returns an object composed from key-value pairs.
 * 将子成员为键值对的数组转化为对象
 * @param: [pairs]{String:Any} 键值对
 * @return: [object]{Object} 结果对象
 */

type T = string;
type U = any;
type Pairs = [T, U];

const array: Array<Pairs> = [ [ 'a', 1 ], [ 'b', 2 ] ];
const result: object = _.fromPairs(array);

console.log(result); // { a: 1, b: 2 }