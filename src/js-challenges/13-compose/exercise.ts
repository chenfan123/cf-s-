/** 目标：组合多个函数。示例：compose(square,double)(2) => square(double(2)) => 16。 */
export function compose<T>(..._fns:Array<(value:T)=>T>) {
  // TODO: 使用 reduceRight 从右向左传递结果
  return (value:T) => value
}

