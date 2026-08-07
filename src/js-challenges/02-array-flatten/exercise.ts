/** 目标：按指定深度展开嵌套数组。示例：flatten([1,[2,[3]]], 1) => [1,2,[3]] */
export function flatten<T>(_items: (T | T[])[], _depth = Infinity): T[] {
  // TODO: 不允许调用 Array.prototype.flat
  if (_depth <= 0) {
    return _items.slice() as T[]; // slice() 还能避免直接返回原数组引用。
  }
  let result: T[] = [];
  if (_depth > 0) {
    _items.forEach((item) => {
      if (Array.isArray(item)) {
        result = result.concat(flatten(item, _depth - 1));
      } else {
        result.push(item);
      }
    });
  }
  return result;
}
