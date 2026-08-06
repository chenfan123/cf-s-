/**
 * 目标：实现声明式 useInterval，避免闭包读取旧状态。
 * 要求：delay 为 null 时暂停，回调更新时不重启计时器。
 * 示例：useInterval(() => setCount(c => c + 1), running ? 1000 : null)。
 */
export function useInterval(_callback: () => void, _delay: number | null) {
  // TODO: 在这里完成实现
}

