/** 目标：实现 bind。示例：myBind(add,{base:1},2)(3)；需绑定 this 并支持预置参数。 */
export function myBind(_fn:Function,_context:unknown,..._preset:unknown[]) {
  // TODO: 进阶要求：处理返回函数被 new 调用的情况
  return (..._later:unknown[]) => undefined
}

