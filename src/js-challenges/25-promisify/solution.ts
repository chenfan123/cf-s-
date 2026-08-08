type Callback<T>=(error:Error|null,value?:T)=>void
export function promisify<A extends unknown[],T>(fn:(...args:[...A,Callback<T>])=>void){return(...args:A)=>new Promise<T>((resolve,reject)=>fn(...args,(error,value)=>error?reject(error):resolve(value as T)))}
