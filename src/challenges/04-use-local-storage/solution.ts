import { useCallback, useState } from 'react'
export function useLocalStorage<T>(key: string, initial: T) {
  const [value, setValue] = useState<T>(() => { try { const item=localStorage.getItem(key); return item ? JSON.parse(item) : initial } catch { return initial } })
  const update = useCallback((next: T | ((old:T)=>T)) => setValue(old => { const result=typeof next==='function' ? (next as (v:T)=>T)(old) : next; localStorage.setItem(key,JSON.stringify(result)); return result }), [key])
  const remove = useCallback(() => { localStorage.removeItem(key); setValue(initial) }, [key, initial])
  return [value, update, remove] as const
}
