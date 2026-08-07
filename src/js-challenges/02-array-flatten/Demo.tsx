import { useState } from 'react';
import { flatten } from './solution';
const source = [1, [2, [3, [4]]]];

export default function Demo() {
  const [depth, setDepth] = useState(1);
  return (
    <div className="demo">
      <div className="code-result">原数组：{JSON.stringify(source)}</div>
      <label className="field">
        展开深度：{depth}
        <input
          type="range"
          min="0"
          max="4"
          value={depth}
          onChange={(e) => setDepth(+e.target.value)}
        />
      </label>
      <div className="code-result accent">
        {JSON.stringify(flatten(source, depth))}
      </div>
    </div>
  );
}
