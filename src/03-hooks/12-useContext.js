import axios from 'axios'
import React, { useEffect, useState, useContext } from 'react'
import './css/index.css'

// 创建context对象
const GlobalContext = React.createContext()

export default function App() {

    const [filmList, setfilmList] = useState([]);
    const [info, setInfo] = useState('');

    // 请求参数
    useEffect(() => {
        axios.get('/test.json').then((res) => {
            console.log(res.data.data.films);
            setfilmList(res.data.data.films);
        })
    }, [])

    return (
        // 包裹组件 提供者
        // 传递属性 必须是value 固定写法
        <GlobalContext.Provider value={
            {
                call: '电话',
                sms: '短信',
                // 受控于state
                info: info,
                // 提供给子组件来更改数据的方法
                changeInfo: (value) => {
                    setInfo(value)
                }
            }
        }>
            <div>
                {
                    filmList.map((item) =>
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
    const value = useContext(GlobalContext);
    // 返回的对象就是值 可以直接.使用
    console.log(value);
    return <section className="film-item">
        <img src={poster} alt={name}></img>
        <h4 onClick={() => {
            // 调用context中的方法 修改值
            value.changeInfo(synopsis)
        }}>{name}</h4>
        <div>
            观众评分： {grade}
        </div>
    </section>
}

function FilmDetail() {
    const value = useContext(GlobalContext);
    // 返回的对象就是值 可以直接.使用
    console.log(value);
    return (
        <div className="film-detail">
            detail-{value.info}
        </div>
    )
}