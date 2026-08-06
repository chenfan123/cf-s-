import { useToggle } from './solution'
export default function Demo() {
  const light = useToggle(true)
  return <div className="demo"><div className={`lamp ${light.value ? 'on' : ''}`}>💡</div><p>台灯现在：<b>{light.value ? '开启' : '关闭'}</b></p><button onClick={light.toggle}>{light.value ? '关灯' : '开灯'}</button></div>
}
