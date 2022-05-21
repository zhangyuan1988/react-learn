import React, { useState, useCallback, useMemo } from 'react'

export default function App() {
    const [text, settext] = useState('');

    const [name, setname] = useState('fuzi');

    const [list, setlist] = useState(['aa', 'bb', 'cc', 'dd', 'ee']);

    // useCallback 传入两个参数，第一个时函数 第二个是数组
    //如果传入空数组， 那么就是第一次创建后就被缓存， 内部的变量 状态 都是缓存的值，如果值后期改变了,拿到的还是老的name。
    //如果不传第二个参数，每次都会重新声明一次，拿到的就是最新的name.
    // 跟我相关的 更改了我会重新创建，不相关的 就不会重新创建 使用缓存
    const handleChange = useCallback((event) => {
        settext(event.target.value);
    }, [])


    // 内部的变量 状态 都是第一次创建后缓存的值，如果text后期改变了, 拿到的还是第一次创建使用的text  
    // 这里第一次将text制成空了，所以第二次及以后再点击 依然是空。
    // set name 被缓存 缓存为xiaoming
    const handleAdd = useCallback(() => {
        console.log(text);
        setlist([...list, text]);
        settext('')
        setname('xiaoming')
    }, [text, list])


    // useCallback 不会执行第一个参数函数，而是将它返回给你，而 useMemo 会执行第一个函数并
    // 且将函数执行结果返回给你
    const handleDel = useMemo(
        () => (index) => {
            const newList = [...list]
            newList.splice(index, 1)
            setlist(newList)
            console.log(111);
        }, [list])



    return (
        <div>
            <span>{name}</span>--<button onClick={() => {
                setname('xiaoming111')
            }}>changeName</button>
            <input onChange={handleChange} value={text}></input>
            <button onClick={handleAdd}>add</button>

            <ul>
                {
                    list.map((item, index) => (
                        <li key={index}>
                            {item}
                            <button onClick={() =>
                                handleDel(index)
                            }>
                                del
                            </button>
                        </li>
                    ))
                }
            </ul>

        </div>
    )
}
