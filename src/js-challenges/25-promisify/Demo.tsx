import { useState } from 'react';import { promisify } from './solution'
function legacy(value:string,callback:(error:Error|null,value?:string)=>void){setTimeout(()=>value?callback(null,value.toUpperCase()):callback(Error('内容为空')),700)}
const modern=promisify(legacy)
export default function Demo(){const[text,setText]=useState('hello');const[result,setResult]=useState('');const run=()=>modern(text).then(setResult).catch(e=>setResult(e.message));return <div className="demo"><label className="field">回调函数参数<input value={text} onChange={e=>setText(e.target.value)}/></label><button onClick={run}>以 Promise 调用</button><div className="code-result">{result||'等待执行'}</div></div>}
