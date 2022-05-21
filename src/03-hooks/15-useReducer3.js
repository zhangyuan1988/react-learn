import axios from 'axios'
import React, { useEffect, useContext, useReducer } from 'react'
import './css/index.css'

// 创建context对象
const GlobalContext = React.createContext()

const reducer = (prevState, action) => {
    const newState = { ...prevState }

    switch (action.type) {
        case 'setfilms':
            newState.filmList = action.value
            return newState
        case 'changeInfo':
            newState.info = action.value
            return newState
        default:
            return prevState
    }
}

const intialState = {
    filmList: [],
    info: ''
}

export default function App() {

    // 无法处理异步
    const [state, dispatch] = useReducer(reducer, intialState)

    // 请求参数
    useEffect(() => {
        axios.get('/test.json').then((res) => {
            console.log(res.data.data.films);
            dispatch({ type: 'setfilms', value: res.data.data.films })
        })
    }, [])

    return (
        // 包裹组件 提供者
        // 传递属性 必须是value 固定写法
        <GlobalContext.Provider value={
            {
                state, dispatch
            }
        }>
            <div>
                {
                    state.filmList.map((item) =>
                        <FilmItem {...item} key={item.filmId} ></FilmItem>
                    )
                }
                <FilmDetail />
            </div>
        </GlobalContext.Provider>

    )
}

function FilmItem(props) {
    const { name, poster, grade, synopsis } = props
    // 使用useContext 传入参数
    const { dispatch } = useContext(GlobalContext);
    return <section className="film-item">
        <img src={poster} alt={name}></img>
        <h4 onClick={() => {
            // 调用context中的方法 修改值
            dispatch({ type: 'changeInfo', value: synopsis })
        }}>{name}</h4>
        <div>
            观众评分： {grade}
        </div>
    </section>
}

function FilmDetail() {
    const { state: value } = useContext(GlobalContext);
    // 返回的对象就是值 可以直接.使用
    console.log(value);
    return (
        <div className="film-detail">
            detail-{value.info}
        </div>
    )
}