import axios from 'axios'
import React, { Component } from 'react'
import './css/03-communication.css'

// 创建context对象
const GlobalContext = React.createContext()

export default class App extends Component {
    constructor() {
        super()
        this.state = {
            filmList: [],
            info:''
        }
        axios.get('/test.json').then((res) => {
            console.log(res.data.data.films);
            this.setState({ filmList: res.data.data.films });
        })
    }
    render() {
        return (
            // 包裹组件 提供者
            // 传递属性 必须是value 固定写法
            <GlobalContext.Provider value={
                {
                    call: '电话',
                    sms: '短信',
                    // 受控于state
                    info:this.state.info,
                    // 提供给子组件来更改数据的方法
                    changeInfo:(value)=>{
                        this.setState({info:value})
                    }
                }
            }>
                <div>
                    {
                        this.state.filmList.map((item) =>
                            <FilmItem {...item} key={item.filmId} ></FilmItem>
                        )
                    }

                    <FilmDetail />
                </div>
            </GlobalContext.Provider>

        )
    }
}

class FilmItem extends React.Component {
    render() {
        const { name, poster, grade, synopsis } = this.props;
        return (
            // 消费者
            <GlobalContext.Consumer>
                {/* 要使用回调进行包裹 回调有参数 就是传递来的参数 */}
                {
                    (value) => {
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
                }
            </GlobalContext.Consumer>

        )
    }
}

class FilmDetail extends Component {
    render() {
        return(
            <GlobalContext.Consumer>
            {
                (value) => <div className="film-detail">
                    detail-{value.info}
                </div>
            }
        </GlobalContext.Consumer>
        )
    }
}
