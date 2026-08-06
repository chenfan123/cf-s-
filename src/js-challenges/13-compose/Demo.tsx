import { useState } from 'react';import { compose,pipe } from './solution'
const double=(n:number)=>n*2,addOne=(n:number)=>n+1,square=(n:number)=>n*n
export default function Demo(){const[n,setN]=useState(2);return <div className="demo"><label className="field">输入数字<input type="number" value={n} onChange={e=>setN(+e.target.value)}/></label><div className="code-result">compose(square, double, addOne) → {compose(square,double,addOne)(n)}<br/>pipe(square, double, addOne) → {pipe(square,double,addOne)(n)}</div></div>}
