type AnyFn = (...args: number[]) => number
export function curry(fn: AnyFn) {
  function curried(...args: number[]): number | typeof curried {
    return args.length >= fn.length ? fn(...args) : (...next: number[]) => curried(...args, ...next)
  }
  return curried
}
