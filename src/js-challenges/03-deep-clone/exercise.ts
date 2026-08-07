/** 目标：深拷贝对象。示例：const b=deepClone(a); b.user.name='B' 不影响 a。要求支持循环引用、Date、RegExp。 */
export function deepClone<T>(
  value: T,
  weakMap: WeakMap<any, any> | null = null,
): T {
  // TODO: 使用 WeakMap 保存已经克隆的对象
}
