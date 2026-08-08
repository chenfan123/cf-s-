export function myCall<T, A extends unknown[], R>(
  fn: (this: T, ...args: A) => R,
  context: T,
  ...args: A
): R {
  const key = Symbol('fn');
  const target = Object(context) as Record<symbol, (...args: A) => R>;
  target[key] = fn as (...args: A) => R;
  try {
    return target[key](...args);
  } finally {
    delete target[key];
  }
}
