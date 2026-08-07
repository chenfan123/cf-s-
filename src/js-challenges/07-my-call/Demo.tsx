import { useState } from 'react';
import { myCall } from './solution';
function greet(this: { name: string }, word: string) {
  return `${word}，我是 ${this.name}`;
}
export default function Demo() {
  const [name, setName] = useState('小明');
  return (
    <div className="demo">
      <label className="field">
        context.name
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <div className="code-result">{myCall(greet, { name }, '你好')}</div>
    </div>
  );
}
