import { useState } from 'react';
import { curry } from './solution';
const add = curry((a, b, c) => a + b + c);
export default function Demo() {
  const [nums, setNums] = useState([1, 2, 3]);
  const result = (add(nums[0]) as (b: number) => (c: number) => number)(
    nums[1],
  )(nums[2]);
  return (
    <div className="demo">
      <div className="actions">
        {nums.map((n, i) => (
          <input
            className="mini-input"
            key={i}
            type="number"
            value={n}
            onChange={(e) =>
              setNums((v) => v.map((x, j) => (j === i ? +e.target.value : x)))
            }
          />
        ))}
      </div>
      <div className="code-result">
        add({nums[0]})({nums[1]})({nums[2]}) = <b>{result}</b>
      </div>
    </div>
  );
}
