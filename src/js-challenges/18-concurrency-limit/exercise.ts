/** 目标：限制批量异步任务并发数。示例：asyncPool(2,[1,2,3],worker)，同时最多运行两个 worker。 */
export async function asyncPool<T,R>(_limit:number,_items:T[],_worker:(item:T)=>Promise<R>):Promise<R[]> {
  // TODO: 结果顺序必须与 items 顺序一致
  return []
}

