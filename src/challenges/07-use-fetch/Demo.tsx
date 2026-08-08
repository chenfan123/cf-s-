import { useState } from 'react';
import { useFetch } from './solution';
type Todo = { id: number; title: string; completed: boolean };
export default function Demo() {
  const [id, setId] = useState(1);
  const { data, loading, error } = useFetch<Todo>(
    `https://jsonplaceholder.typicode.com/todos/${id}`,
  );
  return (
    <div className="demo">
      <div className="actions">
        <button
          className="secondary"
          disabled={id === 1}
          onClick={() => setId((x) => x - 1)}
        >
          上一条
        </button>
        <span>Todo #{id}</span>
        <button onClick={() => setId((x) => (x % 10) + 1)}>下一条</button>
      </div>
      {loading ? (
        <p className="status">正在请求…</p>
      ) : error ? (
        <p className="error">{error}</p>
      ) : data ? (
        <div className="result">
          <b>{data.title}</b>
          <span>{data.completed ? '✓ 已完成' : '○ 未完成'}</span>
        </div>
      ) : null}
    </div>
  );
}
