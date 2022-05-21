import React, { useReducer } from 'react'

// 定义在外部的处理函数
// 有两个参数 第一个是老的状态，第二个是调用者传递来的数据
const reducer = (prevState, action) => {
    console.log('触发了', prevState, action);
    // 需要复制状态再进行改变
    // 改变后返回新的状态 供组件使用
    let newState = { ...prevState }
    switch (action.type) {
        case 'fizi-mius':
            newState.count--
            return newState
        case 'fizi-add':
            newState.count++
            return newState
        default:
            // 直接返回老状态
            return prevState
    }
}

// 定义在外部的状态对象
const intialState = {
    count: 0
}

export default function App() {
    // 第一个参数是函数(放在外面好管理状态)
    // 第二个参数是初始状态值

    // 返回值 第一个参数是状态值，第二个是改变状态的唯一方法
    const [state, dispatch] = useReducer(reducer, intialState)

    return (
        <div>
            <button onClick={() => {
                // 传递一个对象 必须有type值
                // 这个函数可以触发外部的处理函数
                dispatch({
                    type: 'fizi-mius'
                })
            }}>-</button>
            {state.count}
            <button onClick={() => {
                // 传递一个对象 必须有type值
                dispatch({
                    type: 'fizi-add'
                })
            }}>+</button>
        </div>
    )
}
