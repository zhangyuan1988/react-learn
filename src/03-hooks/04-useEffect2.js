import React, { useState, useEffect } from 'react'

export default function App() {
    const [name, setname] = useState('fuzi');
    useEffect(() => {
        setname(name.substring(0,1).toUpperCase()+name.substring(1));
    }, [name]);// 数组中传递回调中使用过的name  使下次set时逻辑可以复用
    // 第一次执行一次，后续数组中的数据依赖更新 也会执行
    return (
        <div>
            App-{name}
            <button onClick={()=>{
                setname('xiaoming')
            }}>click</button>
        </div>
    )
}
