import { useState } from 'react';import { useEventListener } from './solution'
export default function Demo(){const[key,setKey]=useState('尚未按键');useEventListener('keydown',e=>setKey(e.key));return <div className="demo"><div className="keycap">{key}</div><p className="muted">点击页面后按任意键</p></div>}
