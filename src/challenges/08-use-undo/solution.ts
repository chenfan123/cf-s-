import { useCallback, useState } from 'react';
export function useUndo<T>(initial: T) {
  const [history, setHistory] = useState([initial]);
  const [index, setIndex] = useState(0);
  const set = useCallback(
    (value: T) => {
      setHistory((h) => [...h.slice(0, index + 1), value]);
      setIndex((i) => i + 1);
    },
    [index],
  );
  const undo = useCallback(() => setIndex((i) => Math.max(0, i - 1)), []);
  const redo = useCallback(
    () => setIndex((i) => Math.min(history.length - 1, i + 1)),
    [history.length],
  );
  return {
    value: history[index],
    set,
    undo,
    redo,
    canUndo: index > 0,
    canRedo: index < history.length - 1,
  };
}
