import React, { useState,useRef } from 'react'

export default function App() {
    const mytext = useRef()

    const [list, setlist] = useState(['aa', 'bb', 'cc', 'dd', 'ee']);

    const handleChange = (event) => {

    }

    const handleAdd = () => {
        console.log(mytext.current.value);
        setlist([...list, mytext.current.value]);
        // 清空
        mytext.current.value = ''
    }
    const handleDel = (index) => {
        const newList = [...list]
        newList.splice(index, 1)
        setlist(newList)
    }
    return (
        <div>
            <input ref={mytext}></input>
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
