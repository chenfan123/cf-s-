/**
 * 目标：实现支持撤销、重做的状态 Hook。
 * 要求：新编辑后丢弃当前位置之后的历史；提供 canUndo/canRedo。
 * 示例：依次 set('A')、set('B')、undo() 后 value 应为 'A'。
 */
export function useUndo<T>(initial: T) {
  // TODO: 在这里完成实现
  return { value: initial, set: (_value: T) => {}, undo: () => {}, redo: () => {}, canUndo: false, canRedo: false }
}

