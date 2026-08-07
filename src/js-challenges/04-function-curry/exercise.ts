/** 目标：把多参数函数柯里化。示例：curry((a,b,c)=>a+b+c)(1)(2)(3) => 6 */
export function curry(_fn: (...args: number[]) => number) {
  // TODO: 根据 fn.length 判断参数是否收集完毕
  return (..._args: number[]): unknown => undefined;
}
