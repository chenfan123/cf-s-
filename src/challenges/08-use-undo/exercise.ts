/**
 * 目标：实现支持撤销、重做的状态 Hook。
 * 要求：新编辑后丢弃当前位置之后的历史；提供 canUndo/canRedo。
 * 示例：依次 set('A')、set('B')、undo() 后 value 应为 'A'。
 */
import { useState } from 'react';
export function useUndo<T>(initial: T) {
  const [value, setValue] = useState<T>(initial);
  const [history, setHistory] = useState<T[]>([initial]);
  const set = (_value: T) => {
    setValue(_value);
    setHistory((prev) => [...prev, _value]);
  };
  const undo = () => {
    setHistory((prev) => {
      if (prev.length > 1) {
        const newHistory = prev.slice(0, -1);
        setValue(newHistory[newHistory.length - 1]);
        return newHistory;
      }
      return prev;
    });
  };
  const redo = () => {
    setHistory((prev) => {
      const currentIndex = prev.indexOf(value);
      if (currentIndex < prev.length - 1) {
        const newValue = prev[currentIndex + 1];
        setValue(newValue);
        return [...prev, newValue];
      }
      return prev;
    });
  };
  const canUndo = history.length > 1;
  const canRedo = history.indexOf(value) < history.length - 1;
  return {
    value,
    set,
    undo,
    redo,
    canUndo,
    canRedo,
  };
}
