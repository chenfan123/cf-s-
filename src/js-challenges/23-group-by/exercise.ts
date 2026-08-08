/** 目标：按回调返回值分组。示例：groupBy([{age:20},{age:30}], x=>x.age) => {20:[...],30:[...]}。 */
export function groupBy<T,K extends PropertyKey>(_items:T[],_getKey:(item:T)=>K):Record<K,T[]>{
  // TODO: 遍历一次，并把相同 key 的元素放进同一个数组
  return Object.create(null)
}
