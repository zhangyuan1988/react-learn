import React, { useState, memo } from 'react'

export default function App() {
    const [name, setName] = useState('fuzi')
    const [title, setTitle] = useState('title')
    return (
        <div>
            {name}

            <button onClick={() => {
                setName('xiaoming')
            }}>
                click
            </button>

            <button onClick={() => {
                setTitle('11111')
            }}>
                click
            </button>

            <Child title={title} />
        </div>
    )
}

// 和pureComponent（类组件） 用法和效果相同，
const Child = memo((props) => {
    // 非必要更新了 使用memo
    console.log('child---111');
    return (
        <div>
            child
            {props.title}
        </div>
    )
})