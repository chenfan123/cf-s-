/** 目标：数组去重并保持原顺序。示例：unique([1, 2, 2, 1]) => [1, 2] */
export function unique<T>(_items: T[]): T[] {
  // TODO: 请勿调用现成的第三方工具
  const result: T[] = [];
  for (const item of _items) {
    if (!result.includes(item)) {
      result.push(item);
    }
  }
  return result;
}
