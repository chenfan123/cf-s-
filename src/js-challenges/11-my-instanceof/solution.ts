export function myInstanceof(value: unknown, Ctor: Function): boolean {
  if ((typeof value !== 'object' && typeof value !== 'function') || value === null) return false
  let proto = Object.getPrototypeOf(value)
  while (proto !== null) { if (proto === Ctor.prototype) return true; proto = Object.getPrototypeOf(proto) }
  return false
}
