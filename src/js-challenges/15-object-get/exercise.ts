/** 目标：安全读取嵌套属性。示例：get({a:{b:[3]}}, 'a.b[0]', null) => 3。 */
export function get(_object:unknown,_path:string|string[],fallback?:unknown) {
  // TODO: 同时解析点路径和中括号路径
  return fallback
}

