import { useState } from 'react';
import { deepClone } from './solution';
const original = { user: { name: 'Ada' }, skills: ['JS', 'React'] };
export default function Demo() {
  const [copy, setCopy] = useState(() => deepClone(original));
  const mutate = () => {
    const next = deepClone(copy);
    next.user.name = 'Grace';
    next.skills.push('TypeScript');
    setCopy(next);
  };
  return (
    <div className="demo split-result">
      <div>
        <small>原对象</small>
        <pre>{JSON.stringify(original, null, 2)}</pre>
      </div>
      <div>
        <small>克隆对象</small>
        <pre>{JSON.stringify(copy, null, 2)}</pre>
      </div>
      <button onClick={mutate}>修改克隆对象</button>
    </div>
  );
}
