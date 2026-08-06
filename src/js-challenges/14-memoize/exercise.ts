/** 目标：缓存相同参数的计算结果。示例：memoize(square)(2) 调用两次，square 仅执行一次。 */
export function memoize<A extends unknown[],R>(_fn:(...args:A)=>R) {
  // TODO: 设计缓存 key，并考虑对象参数的局限性
  return (..._args:A):R => { throw new Error('TODO') }
}

