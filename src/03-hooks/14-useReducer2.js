import React, { useReducer, useContext } from 'react'

// useContext 和 useReducer组合写法
const GlobalContext = React.createContext()

const intialState = {
    a: '1111',
    b: '1111'
}

const reducer = (prevState, action) => {
    const newState = {...prevState}
    switch (action.type) {
        case 'changeA':
            newState.a = action.value
            return newState
        case 'changeB':
            newState.b = action.value
            return newState
        default:
            return prevState
    }
}

export default function App() {
    const [state, dispatch] = useReducer(reducer, intialState)
    return (
        <GlobalContext.Provider value={{ state, dispatch }}>
            <Child1></Child1>
            <Child2></Child2>
            <Child3></Child3>
        </GlobalContext.Provider>
    )
}

function Child1() {
    // 子组件中使用
    const { dispatch } = useContext(GlobalContext)

    return (
        <div style={{
            backgroundColor: 'red'
        }}>
            < button onClick={() => {
                dispatch({ type: 'changeA', value: 'aaa' })
            }}>
                改变a
            </button>
            <button onClick={() => {
                dispatch({ type: 'changeB', value: 'bbb' })
            }}>
                改变b
            </button>
        </ div>
    )
}

function Child2() {
    const { state } = useContext(GlobalContext)

    return (
        <div style={{
            backgroundColor: 'skyblue'
        }}>
            Child2-{state.a}
        </div>
    )
}


function Child3() {
    const { state } = useContext(GlobalContext)

    return (
        <div style={{
            backgroundColor: 'pink'
        }}>
            Child3-{state.b}
        </div>
    )
}

