import { useState } from 'react';import { groupBy } from './solution'
const people=[{name:'Ada',team:'A'},{name:'Linus',team:'B'},{name:'Grace',team:'A'}]
export default function Demo(){const[key,setKey]=useState<'team'|'name'>('team');return <div className="demo"><div className="actions"><button onClick={()=>setKey('team')}>按团队</button><button className="secondary" onClick={()=>setKey('name')}>按姓名</button></div><pre className="code-result">{JSON.stringify(groupBy(people,x=>x[key]),null,2)}</pre></div>}
