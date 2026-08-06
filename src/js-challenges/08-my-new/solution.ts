type Constructor<A extends unknown[], R extends object> = { new(...args:A):R; prototype:R }
export function myNew<A extends unknown[], R extends object>(Ctor:Constructor<A,R>,...args:A):R {const instance=Object.create(Ctor.prototype) as R;const returned=(Ctor as unknown as (this:R,...args:A)=>R|void).apply(instance,args);return returned && typeof returned==='object'?returned:instance}
