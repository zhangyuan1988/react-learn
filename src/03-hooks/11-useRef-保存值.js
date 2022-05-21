import React, { useState, useRef } from 'react'

export default function App() {

    // useState 记忆函数 记住状态
    const [count, setcount] = useState(0);

    // useCallback 记住函数 防止函数重新创建 起到缓存的作用 
    // 只有第二个参数 变化了，才重新声明一次

    // 这里的useRef可以缓存数据，每次执行++不会从0赋值
    // 保存变量不丢失，，使用的是闭包 用法同React.createRef
    let mycount = useRef(0)
    return (
        <div>
            <button onClick={() => {
                setcount(count + 1)
                mycount.current++
            }}>
                add
            </button>
            {count}--{mycount.current}
        </div>
    )
}
