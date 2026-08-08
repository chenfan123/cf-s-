/** 目标：实现并发任务调度器。示例：new Scheduler(2) 同时最多执行两个 add 加入的任务。 */
export class Scheduler {
  constructor(_limit: number) {
    /* TODO */
  }
  add<T>(_task: () => Promise<T>): Promise<T> {
    // TODO: 超出并发数的任务进入 FIFO 队列
    return Promise.reject(new Error('TODO'));
  }
}
