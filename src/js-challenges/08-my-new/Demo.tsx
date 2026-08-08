import { useState } from 'react';
import { myNew } from './solution';
class Person {
  constructor(public name: string, public age: number) {}
  introduce() {
    return `${this.name}，${this.age} 岁`;
  }
}
export default function Demo() {
  const [age, setAge] = useState(22);
  const person = myNew(Person, '面试者', age);
  return (
    <div className="demo">
      <label className="field">
        年龄：{age}
        <input
          type="range"
          min="18"
          max="50"
          value={age}
          onChange={(e) => setAge(+e.target.value)}
        />
      </label>
      <div className="code-result">{person.introduce()}</div>
      <p className="muted">
        instanceof Person: {String(person instanceof Person)}
      </p>
    </div>
  );
}
