import { useCounter } from './solution'
export default function Demo() { const c = useCounter(3, 0, 10); return <div className="demo"><div className="big-number">{c.count}</div><p>范围限制：0 ～ 10</p><div className="actions"><button onClick={c.decrement}>−1</button><button onClick={c.reset} className="secondary">重置</button><button onClick={c.increment}>+1</button></div></div> }
