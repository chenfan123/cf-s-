import { useState } from 'react';import { shuffle } from './solution'
export default function Demo(){const[cards,setCards]=useState([1,2,3,4,5,6]);return <div className="demo"><div className="shuffle-cards">{cards.map(x=><span key={x}>{x}</span>)}</div><button onClick={()=>setCards(v=>shuffle(v))}>随机洗牌</button></div>}
