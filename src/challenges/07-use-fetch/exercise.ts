/**
 * 目标：实现处理异步请求生命周期的 Hook。
 * 要求：返回 data/loading/error；URL 改变时重请求；卸载时取消请求。
 * 示例：useFetch<User>('/api/user/1')。
 */
export function useFetch<T>(_url: string) {
  // TODO: 在这里完成实现
  return { data: null as T | null, loading: false, error: null as string | null }
}

