function deepClone(obj, cache = new WeakMap()) {
  // @done 基本类型
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  // @done Date
  if (obj instanceof Date) {
    return new Date(obj);
  }

  // @done RegExp
  if (obj instanceof RegExp) {
    return new RegExp(obj);
  }

  // Map
  if (obj instanceof Map) {
    const clone = new Map();
    cache.set(obj, clone);

    obj.forEach((value, key) => {
      clone.set(deepClone(key, cache), deepClone(value, cache));
    });

    return clone;
  }

  // Set
  if (obj instanceof Set) {
    const clone = new Set();
    cache.set(obj, clone);

    obj.forEach((value) => {
      clone.add(deepClone(value, cache));
    });

    return clone;
  }

  // 循环引用
  if (cache.has(obj)) {
    return cache.get(obj);
  }

  // 保持原型
  const clone = Array.isArray(obj)
    ? []
    : Object.create(Object.getPrototypeOf(obj)); // 基于原型创建

  // @done 保存到缓存中，避免循环引用
  cache.set(obj, clone);

  // @done Symbol Key
  Reflect.ownKeys(obj).forEach((key) => {
    clone[key] = deepClone(obj[key], cache);
  });

  return clone;
}
