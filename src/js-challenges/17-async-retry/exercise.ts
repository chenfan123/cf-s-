/** 目标：异步失败重试。示例：retry(request,3,500)，最多执行三次，每次间隔 500ms。 */
export async function retry<T>(_task:()=>Promise<T>,_times=3,_delay=300):Promise<T> {
  // TODO: 成功立即返回，次数耗尽后抛出最后一个错误
  throw new Error('TODO')
}

