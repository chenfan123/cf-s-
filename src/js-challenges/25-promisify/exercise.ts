type Callback<T>=(error:Error|null,value?:T)=>void
/** 目标：把 Node 风格回调函数转换成 Promise。示例：promisify(readFile)(path).then(...)。 */
export function promisify<A extends unknown[],T>(_fn:(...args:[...A,Callback<T>])=>void){
  // TODO: error 非空时 reject，否则 resolve(value)
  return (..._args:A):Promise<T>=>Promise.reject(new Error('TODO'))
}
