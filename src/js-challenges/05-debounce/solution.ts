export function debounce<T extends unknown[]>(fn: (...args: T) => void, delay: number) {
  let timer: ReturnType<typeof setTimeout> | undefined
  const wrapped = (...args: T) => { clearTimeout(timer); timer = setTimeout(() => fn(...args), delay) }
  wrapped.cancel = () => clearTimeout(timer)
  return wrapped
}
