/** 目标：模拟 new。示例：myNew(Person,'Ada') instanceof Person === true。 */
export function myNew<A extends unknown[], R extends object>(
  _Ctor: new (...args: A) => R,
  ..._args: A
): R {
  // TODO: 创建原型关联、执行构造函数并处理其显式返回值
  const obj = Object.create(_Ctor.prototype) as R; // 创建一个新对象，并将其原型设置为构造函数的原型
  const result = _Ctor.apply(obj, _args); // 使用 apply 方法调用构造函数，将新对象作为 this，并传入参数
  return result && typeof result === 'object' ? result : obj; // 如果构造函数返回了一个对象，则返回该对象，否则返回新创建的对象
}
