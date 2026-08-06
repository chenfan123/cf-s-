import { useCallback, useState } from 'react'
export function useCounter(initial = 0, min = -Infinity, max = Infinity) {
  const [count, setCount] = useState(() => Math.min(max, Math.max(min, initial)))
  const increment = useCallback(() => setCount(n => Math.min(max, n + 1)), [max])
  const decrement = useCallback(() => setCount(n => Math.max(min, n - 1)), [min])
  const reset = useCallback(() => setCount(Math.min(max, Math.max(min, initial))), [initial, min, max])
  return { count, increment, decrement, reset } as const
}
