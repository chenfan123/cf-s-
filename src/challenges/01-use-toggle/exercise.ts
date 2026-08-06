import { useState } from 'react'

/**
 * 目标：实现一个用于切换布尔状态的 useToggle Hook。
 * 要求：支持初始值，返回当前值、toggle 方法和 setValue。
 * 示例：const { value, toggle } = useToggle(false)，调用 toggle() 后 value 为 true。
 */
export function useToggle(initial = false) {
  const [value] = useState(initial)
  // TODO: 在这里完成实现
  return { value }
}

