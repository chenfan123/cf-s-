import { useUndo } from './solution';
export default function Demo() {
  const h = useUndo('');
  return (
    <div className="demo">
      <label className="field">
        可撤销编辑器
        <textarea
          value={h.value}
          onChange={(e) => h.set(e.target.value)}
          placeholder="输入内容，然后尝试撤销与重做"
        />
      </label>
      <div className="actions">
        <button disabled={!h.canUndo} onClick={h.undo}>
          ↶ 撤销
        </button>
        <button className="secondary" disabled={!h.canRedo} onClick={h.redo}>
          ↷ 重做
        </button>
      </div>
    </div>
  );
}
