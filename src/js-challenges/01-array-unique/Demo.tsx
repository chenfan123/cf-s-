import { useState } from 'react';
import { unique } from './solution';
export default function Demo() {
  const [text, setText] = useState('1, 2, 2, 3, 1, 4');
  const values = text
    .split(',')
    .map((x) => x.trim())
    .filter(Boolean);
  return (
    <div className="demo">
      <label className="field">
        输入数组（逗号分隔）
        <input value={text} onChange={(e) => setText(e.target.value)} />
      </label>
      <div className="code-result">[{unique(values).join(', ')}]</div>
    </div>
  );
}
