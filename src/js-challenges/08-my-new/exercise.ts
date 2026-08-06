/** 目标：模拟 new。示例：myNew(Person,'Ada') instanceof Person === true。 */
export function myNew<A extends unknown[],R extends object>(_Ctor:new(...args:A)=>R,..._args:A):R {
  // TODO: 创建原型关联、执行构造函数并处理其显式返回值
  throw new Error('TODO')
}

