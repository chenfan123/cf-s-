/** 目标：包装函数使其最多执行一次。示例：const init=once(fn)，调用 init 三次，fn 只执行一次且结果相同。 */
export function once<A extends unknown[],R>(_fn:(...args:A)=>R){
  // TODO: 闭包保存是否执行及首次返回值
  return (..._args:A):R=>{throw new Error('TODO')}
}
