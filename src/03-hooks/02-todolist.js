import React, { useState } from 'react'

export default function App() {
    const [text, settext] = useState('');

    const [list, setlist] = useState(['aa', 'bb', 'cc', 'dd', 'ee']);

    const handleChange = (event) => {
        settext(event.target.value);
    }
    const handleAdd = () => {
        console.log(text);
        setlist([...list, text]);
        settext('')
    }
    const handleDel = (index) => {
        const newList = [...list]
        newList.splice(index, 1)
        setlist(newList)
    }
    return (
        <div>
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
