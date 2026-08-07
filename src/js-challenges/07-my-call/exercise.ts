/** 目标：不使用 call/apply/bind 改变函数 this。示例：myCall(greet,{name:'Ada'},'Hi')。 */
export function myCall<T, A extends unknown[], R>(
  _fn: (this: T, ...args: A) => R,
  _context: T,
  ..._args: A
): R {
  // TODO: 可用 Symbol 在 context 上临时挂载函数，执行后记得删除

  throw new Error('TODO');
}
