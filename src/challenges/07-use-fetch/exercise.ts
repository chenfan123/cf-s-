/**
 * 目标：实现处理异步请求生命周期的 Hook。
 * 要求：返回 data/loading/error；URL 改变时重请求；卸载时取消请求。
 * 示例：useFetch<User>('/api/user/1')。
 */
import { useState, useEffect } from 'react';
export function useFetch<T>(_url: string) {
  // TODO: 在这里完成实现
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true; // 标记组件是否已挂载
    setLoading(true);
    setError(null);
    setData(null);

    fetch(_url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json() as Promise<T>;
      })
      .then((data) => {
        if (isMounted) {
          setData(data);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (isMounted) {
          setError(err.message);
          setLoading(false);
        }
      });

    return () => {
      isMounted = false; // 组件卸载时设置标记为 false
    };
  }, [_url]);

  return {
    data,
    loading,
    error,
  };
}
