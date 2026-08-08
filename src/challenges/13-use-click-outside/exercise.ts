/** 目标：检测指定元素之外的点击。示例：const ref=useClickOutside(close); return <div ref={ref}>菜单</div>。 */
export function useClickOutside<T extends HTMLElement>(_onOutside:()=>void){
  // TODO: 返回元素 ref；监听 document；用 contains 判断点击目标；卸载时清理
  return {current:null as T|null}
}
