/** 目标：实现防抖。示例：连续调用三次 debounce(fn,300)，停止 300ms 后 fn 只执行一次。 */
export function debounce<T extends unknown[]>(
  _fn: (...args: T) => void,
  _delay: number,
) {
  let timer: any = null;
  // TODO: 保留最后一次参数，并给返回函数添加 cancel 方法
  const wrapped = (..._args: T): void => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      _fn(..._args);
    }, _delay);
  };
  wrapped.cancel = () => {
    if (timer) clearTimeout(timer);
  };
  return wrapped;
}
