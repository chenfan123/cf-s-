/** 目标：判断组件当前是否仍挂载。示例：异步请求结束后 if (mounted.current) setState(data)。 */
export function useMounted(){
  // TODO: 用 ref 保存状态，在 effect 中设置并在 cleanup 中复原
  return {current:false}
}
