# React Hooks Lab

一个按简单到困难编排的前端手写题项目，包含 React Hooks 与 JavaScript 两条题库。每道题都有独立目录，并严格拆分为三个文件：

- `exercise.ts`：练习文件，包含目标、约束、输入输出示例和待完成骨架。
- `solution.ts`：完整参考答案。
- `Demo.tsx`：可交互效果演示，默认导入参考答案。

## 启动

```bash
npm install
npm run dev
```

浏览器访问终端显示的本地地址（通常为 `http://localhost:5173`）。

## 练习方式

1. 打开某道题目录，阅读页面上的要求。
2. 打开 `exercise.ts`，根据注释独立完成实现，不需要修改答案文件。
3. 完成后把同目录 `Demo.tsx` 的导入从 `./solution` 改成 `./exercise`，页面会热更新并验证你的实现。
4. 依次完成 useToggle、useCounter、usePrevious、useLocalStorage、useDebounce、useInterval、useFetch、useUndo。

## 目录

- `src/challenges`：14 道 React Hooks 手写题。
- `src/js-challenges`：26 道 JavaScript 面试手写题，包含数组、对象、原型链、函数、缓存、异步并发与设计模式。
