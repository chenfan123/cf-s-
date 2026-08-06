import { useState } from 'react';import { myBind } from './solution'
function introduce(this:{name:string},prefix:string,job:string){return `${prefix}，我是${this.name}，一名${job}`}
export default function Demo(){const[name,setName]=useState('小林');const bound=myBind(introduce,{name},'你好');return <div className="demo"><label className="field">绑定的 this.name<input value={name} onChange={e=>setName(e.target.value)}/></label><div className="code-result">{bound('前端工程师')}</div></div>}
