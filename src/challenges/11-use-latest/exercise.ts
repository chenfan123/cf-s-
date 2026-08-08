/** 目标：用稳定 ref 始终读取最新值。示例：const latest=useLatest(count)，旧回调中 latest.current 仍是新 count。 */
export function useLatest<T>(_value:T){
  // TODO: ref 对象必须稳定，但每次渲染都要同步 current
  return {current:_value}
}
