export function flatten<T>(items: (T | T[])[], depth = Infinity): T[] {
  if (depth <= 0) return items.slice() as T[];
  return items.reduce<T[]>(
    (result, item) =>
      result.concat(Array.isArray(item) ? flatten(item, depth - 1) : item),
    [],
  );
}
