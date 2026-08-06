/**
 * 目标：实现带上下限的计数器 Hook。
 * 要求：返回 count、increment、decrement、reset，且不能越过 min/max。
 * 示例：useCounter(1, 0, 2)，连续加两次后 count 仍为 2。
 */
export function useCounter(initial = 0, min = -Infinity, max = Infinity) {
  // TODO: 在这里完成实现
  return { count: Math.min(max, Math.max(min, initial)) }
}

