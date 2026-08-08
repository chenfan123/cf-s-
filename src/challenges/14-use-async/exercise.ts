/** 目标：管理任意异步函数的 loading/data/error。示例：const {execute,loading}=useAsync(saveUser)。 */
export function useAsync<A extends unknown[],T>(_task:(...args:A)=>Promise<T>){
  // TODO: execute 透传参数与结果，并避免较旧请求覆盖较新请求
  return {data:null as T|null,loading:false,error:null as string|null,execute:(..._args:A)=>Promise.reject(new Error('TODO'))}
}
