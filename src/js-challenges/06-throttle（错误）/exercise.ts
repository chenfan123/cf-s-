/** 目标：实现节流。示例：10ms 内调用 10 次 throttle(fn,1000)，fn 每秒最多执行一次。 */
export function throttle<T extends unknown[]>(
  _fn: (...args: T) => void,
  _wait: number,
) {
  // TODO: 支持首次立即执行和尾调用
  let timer: any = null;
  const wrapped = (..._args: T) => {
    _fn(..._args);
    if (timer) {
      return;
    }
    timer = setTimeout(() => {
      _fn(..._args);
      timer = null;
    }, _wait);
  };
  return wrapped;
}
