export function myBind<T,A extends unknown[],B extends unknown[],R>(fn:(this:T,...args:[...A,...B])=>R,context:T,...preset:A){return(...later:B)=>fn.apply(context,[...preset,...later])}
