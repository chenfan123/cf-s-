import { useState } from 'react';import { get } from './solution'
const data={user:{profile:{name:'Ada'},skills:['JS','React']}}
export default function Demo(){const[path,setPath]=useState('user.profile.name');return <div className="demo"><label className="field">对象路径<input value={path} onChange={e=>setPath(e.target.value)}/></label><div className="code-result">{JSON.stringify(get(data,path,'未找到'))}</div><p className="muted">试试 user.skills[1] 或 user.age</p></div>}
