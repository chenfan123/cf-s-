import { useState } from 'react';import { chunk } from './solution'
export default function Demo(){const[size,setSize]=useState(2);return <div className="demo"><label className="field">每组数量：{size}<input type="range" min="1" max="5" value={size} onChange={e=>setSize(+e.target.value)}/></label><div className="code-result">{JSON.stringify(chunk([1,2,3,4,5,6,7],size))}</div></div>}
