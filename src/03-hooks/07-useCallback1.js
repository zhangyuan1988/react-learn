import React, { useState } from 'react'

export default function App() {

  // useState 记忆函数 记住状态
  const [count, setcount] = useState(0);

  // useCallback 记住函数 防止函数重新创建 起到缓存的作用 
  // 只有第二个参数 变化了，才重新声明一次

  let mycount = 0
  return (
    <div>
      <button onClick={() => { 
        setcount(count + 1)
        mycount++
       }}>
        add
      </button>
      {count}--{mycount}
    </div>
  )
}
