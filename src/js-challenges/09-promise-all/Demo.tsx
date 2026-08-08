import { useState } from 'react';
import { promiseAll } from './solution';
const wait = (value: string, ms: number) =>
  new Promise<string>((r) => setTimeout(() => r(value), ms));
export default function Demo() {
  const [state, setState] = useState('尚未执行');
  const run = async () => {
    setState('并行执行中…');
    const start = Date.now();
    const values = await promiseAll([
      wait('A', 800),
      wait('B', 400),
      Promise.resolve('C'),
    ]);
    setState(`${values.join(' + ')}，耗时约 ${Date.now() - start}ms`);
  };
  return (
    <div className="demo">
      <div className="code-result">{state}</div>
      <button onClick={run}>运行 Promise.all</button>
      <p className="muted">结果保持输入顺序，总耗时取决于最慢任务</p>
    </div>
  );
}
