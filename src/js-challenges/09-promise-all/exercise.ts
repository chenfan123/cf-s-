/** 目标：实现 Promise.all。示例：promiseAll([Promise.resolve(1),2]) => Promise<[1,2]>。 */
export function promiseAll<T>(
  _items: Iterable<T | PromiseLike<T>>,
): Promise<Awaited<T>[]> {
  // TODO: 保持结果顺序；空输入立即完成；任一失败立即 reject
}
