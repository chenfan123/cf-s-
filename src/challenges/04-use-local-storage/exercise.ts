/**
 * 目标：实现状态与 localStorage 同步的 Hook。
 * 要求：支持惰性初始化、函数式更新和删除，并处理无效 JSON。
 * 示例：const [name, setName, remove] = useLocalStorage('name', '')。
 */
export function useLocalStorage<T>(_key: string, initial: T) {
  // TODO: 在这里完成实现
  return [initial, (_value: T | ((old: T) => T)) => {}, () => {}] as const
}

