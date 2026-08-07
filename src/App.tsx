import { useState, type ComponentType } from 'react';
import { BookOpen, CheckCircle2, Code2, Menu, X } from 'lucide-react';
import ToggleDemo from './challenges/01-use-toggle/Demo';
import CounterDemo from './challenges/02-use-counter/Demo';
import PreviousDemo from './challenges/03-use-previous/Demo';
import StorageDemo from './challenges/04-use-local-storage/Demo';
import HookDebounceDemo from './challenges/05-use-debounce/Demo';
import IntervalDemo from './challenges/06-use-interval/Demo';
import FetchDemo from './challenges/07-use-fetch/Demo';
import UndoDemo from './challenges/08-use-undo/Demo';
import UniqueDemo from './js-challenges/01-array-unique/Demo';
import FlattenDemo from './js-challenges/02-array-flatten/Demo';
import CloneDemo from './js-challenges/03-deep-clone/Demo';
import CurryDemo from './js-challenges/04-function-curry/Demo';
import DebounceDemo from './js-challenges/05-debounce/Demo';
import ThrottleDemo from './js-challenges/06-throttle（错误）/Demo';
import CallDemo from './js-challenges/07-my-call/Demo';
import NewDemo from './js-challenges/08-my-new/Demo';
import PromiseAllDemo from './js-challenges/09-promise-all/Demo';
import EmitterDemo from './js-challenges/10-event-emitter/Demo';
import InstanceofDemo from './js-challenges/11-my-instanceof/Demo';
import BindDemo from './js-challenges/12-my-bind/Demo';
import ComposeDemo from './js-challenges/13-compose/Demo';
import MemoizeDemo from './js-challenges/14-memoize/Demo';
import ObjectGetDemo from './js-challenges/15-object-get/Demo';
import TemplateDemo from './js-challenges/16-template-render/Demo';
import RetryDemo from './js-challenges/17-async-retry/Demo';
import PoolDemo from './js-challenges/18-concurrency-limit/Demo';
import LRUDemo from './js-challenges/19-lru-cache/Demo';
import SchedulerDemo from './js-challenges/20-task-scheduler/Demo';

type Level = '基础' | '进阶' | '挑战';
type Track = 'React Hooks' | 'JavaScript';
type Challenge = {
  id: number;
  title: string;
  level: Level;
  summary: string;
  requirements: string[];
  concepts: string[];
  Demo: ComponentType;
};
const hooks: Challenge[] = [
  {
    id: 1,
    title: '实现 useToggle',
    level: '基础',
    summary: '封装布尔状态切换，掌握最基本的自定义 Hook。',
    requirements: ['支持自定义初始值', '提供 toggle 与直接赋值能力'],
    concepts: ['useState', 'useCallback'],
    Demo: ToggleDemo,
  },
  {
    id: 2,
    title: '实现 useCounter',
    level: '基础',
    summary: '实现带上下限与重置能力的计数器。',
    requirements: ['支持初始值、最小值、最大值', '递增、递减不能越界'],
    concepts: ['函数式更新', '边界处理'],
    Demo: CounterDemo,
  },
  {
    id: 3,
    title: '实现 usePrevious',
    level: '基础',
    summary: '记住上一次渲染的值，并理解 ref 的生命周期。',
    requirements: ['首次渲染返回 undefined', '更新不能触发额外渲染'],
    concepts: ['useRef', 'useEffect'],
    Demo: PreviousDemo,
  },
  {
    id: 4,
    title: '实现 useLocalStorage',
    level: '进阶',
    summary: '让 React 状态与浏览器存储保持同步。',
    requirements: ['惰性读取初始值', '支持函数式更新与删除', '处理无效 JSON'],
    concepts: ['惰性初始化', '泛型', 'localStorage'],
    Demo: StorageDemo,
  },
  {
    id: 5,
    title: '实现 useDebounce',
    level: '进阶',
    summary: '为快速变化的输入建立防抖值。',
    requirements: ['延迟可配置', '依赖变化时清理旧计时器'],
    concepts: ['副作用清理', '依赖数组'],
    Demo: HookDebounceDemo,
  },
  {
    id: 6,
    title: '实现 useInterval',
    level: '进阶',
    summary: '实现声明式定时器，并避开闭包陷阱。',
    requirements: ['delay 为 null 时暂停', '回调始终读取最新状态'],
    concepts: ['闭包', 'useRef', 'cleanup'],
    Demo: IntervalDemo,
  },
  {
    id: 7,
    title: '实现 useFetch',
    level: '挑战',
    summary: '管理异步请求的加载、成功、失败生命周期。',
    requirements: [
      '暴露 loading/data/error',
      'URL 变化重新请求',
      '卸载时取消请求',
    ],
    concepts: ['AbortController', '竞态处理'],
    Demo: FetchDemo,
  },
  {
    id: 8,
    title: '实现 useUndo',
    level: '挑战',
    summary: '用历史快照实现撤销与重做。',
    requirements: ['新编辑清除未来历史', '正确计算可撤销/重做状态'],
    concepts: ['历史栈', '不可变更新'],
    Demo: UndoDemo,
  },
];
const javascript: Challenge[] = [
  {
    id: 1,
    title: '数组去重 unique',
    level: '基础',
    summary: '实现通用数组去重，理解 Set 的值相等规则。',
    requirements: ['保持元素原有顺序', '支持任意类型元素'],
    concepts: ['Set', '展开运算符'],
    Demo: UniqueDemo,
  },
  {
    id: 2,
    title: '数组扁平化 flatten',
    level: '基础',
    summary: '递归展开嵌套数组，并支持指定展开深度。',
    requirements: ['不能调用 Array.prototype.flat', 'depth 为 0 时保持原结构'],
    concepts: ['递归', 'reduce'],
    Demo: FlattenDemo,
  },
  {
    id: 3,
    title: '深拷贝 deepClone',
    level: '进阶',
    summary: '复制复杂对象，同时处理循环引用和特殊对象。',
    requirements: ['支持对象、数组、Date、RegExp', '使用 WeakMap 处理循环引用'],
    concepts: ['WeakMap', 'Reflect', '原型链'],
    Demo: CloneDemo,
  },
  {
    id: 4,
    title: '函数柯里化 curry',
    level: '进阶',
    summary: '把多参数函数转换为可分步收集参数的函数。',
    requirements: ['根据原函数参数长度判断执行', '支持一次传入一个或多个参数'],
    concepts: ['闭包', '高阶函数', 'fn.length'],
    Demo: CurryDemo,
  },
  {
    id: 5,
    title: '防抖 debounce',
    level: '进阶',
    summary: '频繁触发时只执行最后一次调用。',
    requirements: ['保留最后一次参数', '暴露 cancel 取消方法'],
    concepts: ['闭包', 'setTimeout'],
    Demo: DebounceDemo,
  },
  {
    id: 6,
    title: '节流 throttle',
    level: '进阶',
    summary: '限制高频事件在固定时间内最多执行一次。',
    requirements: ['支持首调用立即执行', '保留时间窗口内最后一次调用'],
    concepts: ['时间戳', '定时器'],
    Demo: ThrottleDemo,
  },
  {
    id: 7,
    title: '手写 Function.call',
    level: '挑战',
    summary: '不调用原生 call/apply，显式改变函数的 this。',
    requirements: [
      '使用唯一属性避免覆盖',
      '执行后清理临时属性',
      '正确传递参数和返回值',
    ],
    concepts: ['this', 'Symbol', '上下文'],
    Demo: CallDemo,
  },
  {
    id: 8,
    title: '手写 new 操作符',
    level: '挑战',
    summary: '模拟 new 创建实例、连接原型和处理返回值的过程。',
    requirements: ['实例继承构造函数原型', '构造函数返回对象时采用该对象'],
    concepts: ['prototype', 'Object.create'],
    Demo: NewDemo,
  },
  {
    id: 9,
    title: '手写 Promise.all',
    level: '挑战',
    summary: '并行等待多个异步任务，并保持结果顺序。',
    requirements: [
      '空数组立即完成',
      '任一任务失败立即 reject',
      '结果顺序与输入一致',
    ],
    concepts: ['Promise', 'Iterable', '并发'],
    Demo: PromiseAllDemo,
  },
  {
    id: 10,
    title: '发布订阅 EventEmitter',
    level: '挑战',
    summary: '实现事件中心，解耦事件发布方和订阅方。',
    requirements: ['实现 on、off、emit、once', '订阅方法返回取消函数'],
    concepts: ['Map', 'Set', '观察者模式'],
    Demo: EmitterDemo,
  },
  {
    id: 11,
    title: '手写 instanceof',
    level: '基础',
    summary: '沿原型链判断构造函数的 prototype 是否存在。',
    requirements: ['正确处理基本类型与 null', '逐级遍历原型链'],
    concepts: ['prototype', '原型链'],
    Demo: InstanceofDemo,
  },
  {
    id: 12,
    title: '手写 Function.bind',
    level: '进阶',
    summary: '返回绑定 this 和部分参数的新函数。',
    requirements: ['绑定指定上下文', '支持参数预置与后续参数'],
    concepts: ['this', '偏函数'],
    Demo: BindDemo,
  },
  {
    id: 13,
    title: '函数组合 compose / pipe',
    level: '基础',
    summary: '把多个单一职责函数组合成数据处理管道。',
    requirements: ['compose 从右向左执行', 'pipe 从左向右执行'],
    concepts: ['reduce', '函数式编程'],
    Demo: ComposeDemo,
  },
  {
    id: 14,
    title: '函数缓存 memoize',
    level: '进阶',
    summary: '缓存相同参数的计算结果，避免重复执行。',
    requirements: ['相同参数直接命中缓存', '保留原函数返回类型'],
    concepts: ['Map', '闭包', '缓存'],
    Demo: MemoizeDemo,
  },
  {
    id: 15,
    title: '安全对象取值 get',
    level: '基础',
    summary: '根据字符串路径安全读取嵌套对象属性。',
    requirements: ['支持 a.b.c 与 a[0].b', '路径不存在时返回默认值'],
    concepts: ['路径解析', '可选值'],
    Demo: ObjectGetDemo,
  },
  {
    id: 16,
    title: '模板字符串渲染',
    level: '基础',
    summary: '将模板中的双花括号变量替换为对象数据。',
    requirements: ['支持嵌套对象路径', '缺失变量替换为空字符串'],
    concepts: ['正则表达式', 'replace'],
    Demo: TemplateDemo,
  },
  {
    id: 17,
    title: '异步失败重试 retry',
    level: '进阶',
    summary: '异步任务失败时按指定次数和间隔重新执行。',
    requirements: ['成功后立即停止', '耗尽次数后抛出最后错误'],
    concepts: ['async/await', '错误处理'],
    Demo: RetryDemo,
  },
  {
    id: 18,
    title: '异步并发池 asyncPool',
    level: '挑战',
    summary: '批量处理异步任务，同时限制最大并发数。',
    requirements: ['运行数不能超过限制', '结果顺序与输入顺序一致'],
    concepts: ['并发控制', '工作线程'],
    Demo: PoolDemo,
  },
  {
    id: 19,
    title: 'LRU 缓存',
    level: '挑战',
    summary: '实现最近最少使用缓存，容量满时淘汰最久未访问项。',
    requirements: ['get 后提升为最新使用', 'put 超出容量时淘汰头部'],
    concepts: ['Map', '缓存淘汰策略'],
    Demo: LRUDemo,
  },
  {
    id: 20,
    title: '并发任务调度器',
    level: '挑战',
    summary: '把异步任务放入队列，并控制同时运行的任务数量。',
    requirements: ['add 返回任务结果 Promise', '任务结束后自动启动队首任务'],
    concepts: ['任务队列', 'Promise.finally'],
    Demo: SchedulerDemo,
  },
];
const banks: Record<Track, Challenge[]> = {
  'React Hooks': hooks,
  JavaScript: javascript,
};

export default function App() {
  const [track, setTrack] = useState<Track>('React Hooks');
  const [selected, setSelected] = useState(0);
  const [open, setOpen] = useState(false);
  const challenges = banks[track];
  const item = challenges[selected];
  const switchTrack = (next: Track) => {
    setTrack(next);
    setSelected(0);
    setOpen(false);
  };
  return (
    <div className="app">
      <aside className={open ? 'open' : ''}>
        <div className="brand">
          <span>&lt;/&gt;</span>
          <div>
            <b>Code Lab</b>
            <small>前端手写题训练场</small>
          </div>
        </div>
        <div className="track-tabs">
          {(Object.keys(banks) as Track[]).map((name) => (
            <button
              key={name}
              className={track === name ? 'active' : ''}
              onClick={() => switchTrack(name)}
            >
              {name}
            </button>
          ))}
        </div>
        <nav>
          {(['基础', '进阶', '挑战'] as Level[]).map((level) => (
            <section key={level}>
              <h3>{level}</h3>
              {challenges.map((c, i) =>
                c.level === level ? (
                  <button
                    key={c.title}
                    className={i === selected ? 'active' : ''}
                    onClick={() => {
                      setSelected(i);
                      setOpen(false);
                    }}
                  >
                    <i>{String(c.id).padStart(2, '0')}</i>
                    <span>{c.title}</span>
                  </button>
                ) : null,
              )}
            </section>
          ))}
        </nav>
        <div className="progress">
          <span>
            <CheckCircle2 size={16} /> {challenges.length} 道练习
          </span>
          <small>按顺序完成，效果更佳</small>
        </div>
      </aside>
      <main>
        <header>
          <button className="menu" onClick={() => setOpen((v) => !v)}>
            {open ? <X /> : <Menu />}
          </button>
          <div className="crumb">
            <BookOpen size={17} /> {track} 手写题 / {item.level}
          </div>
          <a
            href={
              track === 'React Hooks'
                ? 'https://react.dev/reference/react'
                : 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript'
            }
            target="_blank"
          >
            <Code2 size={17} /> 官方文档
          </a>
        </header>
        <article>
          <div className="hero">
            <span className={`badge ${item.level}`}>
              {track} · {item.level} · 题目 {String(item.id).padStart(2, '0')}
            </span>
            <h1>{item.title}</h1>
            <p>{item.summary}</p>
          </div>
          <div className="file-guide">
            <code>exercise.ts</code>
            <span>你手写，内含目标与示例</span>
            <code>solution.ts</code>
            <span>参考答案</span>
            <code>Demo.tsx</code>
            <span>页面效果</span>
          </div>
          <div className="grid">
            <section className="card task">
              <div className="card-title">
                <span>01</span>
                <h2>题目要求</h2>
              </div>
              <ul>
                {item.requirements.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
              <div className="concepts">
                {item.concepts.map((x) => (
                  <code key={x}>{x}</code>
                ))}
              </div>
              <div className="tip">
                💡 完成 exercise.ts 后，把 Demo.tsx 中的导入从 ./solution 改成
                ./exercise，即可用页面验收你的实现。
              </div>
            </section>
            <section className="card preview">
              <div className="card-title">
                <span>02</span>
                <h2>效果预览</h2>
                <em>LIVE</em>
              </div>
              <item.Demo />
            </section>
          </div>
          <footer>
            <button
              className="secondary"
              disabled={selected === 0}
              onClick={() => setSelected((x) => x - 1)}
            >
              ← 上一题
            </button>
            <span>
              {selected + 1} / {challenges.length}
            </span>
            <button
              disabled={selected === challenges.length - 1}
              onClick={() => setSelected((x) => x + 1)}
            >
              下一题 →
            </button>
          </footer>
        </article>
      </main>
      {open ? <div className="overlay" onClick={() => setOpen(false)} /> : null}
    </div>
  );
}
