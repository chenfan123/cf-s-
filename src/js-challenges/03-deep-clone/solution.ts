export function deepClone<T>(value: T, cache = new WeakMap<object, unknown>()): T {
  if (typeof value !== 'object' || value === null) return value
  if (value instanceof Date) return new Date(value) as T
  if (value instanceof RegExp) return new RegExp(value.source, value.flags) as T
  if (cache.has(value)) return cache.get(value) as T
  const result: Record<PropertyKey, unknown> | unknown[] = Array.isArray(value) ? [] : Object.create(Object.getPrototypeOf(value))
  cache.set(value, result)
  const target = result as Record<PropertyKey, unknown>
  Reflect.ownKeys(value).forEach(key => { target[key] = deepClone((value as Record<PropertyKey, unknown>)[key], cache) })
  return result as T
}
