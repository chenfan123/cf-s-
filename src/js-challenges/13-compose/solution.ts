export function compose<T>(...fns:Array<(value:T)=>T>){return(value:T)=>fns.reduceRight((result,fn)=>fn(result),value)}
export function pipe<T>(...fns:Array<(value:T)=>T>){return(value:T)=>fns.reduce((result,fn)=>fn(result),value)}
