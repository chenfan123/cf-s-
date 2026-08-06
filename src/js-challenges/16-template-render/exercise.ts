/** 目标：渲染双花括号模板。示例：render('Hi {{user.name}}',{user:{name:'Ada'}}) => 'Hi Ada'。 */
export function render(template:string,_data:Record<string,unknown>):string {
  // TODO: 用正则找到变量，再根据嵌套路径取值
  return template
}

