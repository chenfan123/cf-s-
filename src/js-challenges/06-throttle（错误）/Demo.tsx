import { useMemo, useState } from 'react';
import { throttle } from './solution';
export default function Demo() {
  const [clicks, setClicks] = useState(0);
  const [runs, setRuns] = useState(0);
  const run = useMemo(() => throttle(() => setRuns((v) => v + 1), 1000), []);
  return (
    <div className="demo">
      <div className="compare">
        <span>
          点击次数<b>{clicks}</b>
        </span>
        <span>
          执行次数<b>{runs}</b>
        </span>
      </div>
      <button
        onClick={() => {
          setClicks((v) => v + 1);
          run();
        }}
      >
        快速连续点击
      </button>
      <p className="muted">函数每秒最多执行一次</p>
    </div>
  );
}
