import type { DependencyList,EffectCallback } from 'react'
/** 目标：实现跳过首次渲染、仅在依赖更新时执行的 effect。示例：useUpdateEffect(fn,[count])。 */
export function useUpdateEffect(_effect:EffectCallback,_deps:DependencyList){
  // TODO: 用 ref 记录是否为首次 effect
}
