import { useEffect,useRef,type DependencyList,type EffectCallback } from 'react'
export function useUpdateEffect(effect:EffectCallback,deps:DependencyList){const first=useRef(true);useEffect(()=>{if(first.current){first.current=false;return}return effect()},deps)}
