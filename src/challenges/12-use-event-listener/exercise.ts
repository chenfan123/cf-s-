/** 目标：声明式订阅浏览器事件，并始终调用最新 handler。示例：useEventListener('keydown', e => ...) */
export function useEventListener(_type:string,_handler:(event:Event)=>void,_target:EventTarget=window){
  // TODO: 注册事件并在卸载时移除；用 ref 避免 handler 变化导致反复订阅
}
