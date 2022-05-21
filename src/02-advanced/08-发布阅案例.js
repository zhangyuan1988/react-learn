import axios from 'axios'
import React, { Component } from 'react'
import './css/03-communication.css'

export default class App extends Component {
    constructor() {
        super()
        this.state = {
            filmList: [],
            currentDetail: ''
        }
        axios.get('/test.json').then((res) => {
            console.log(res.data.data.films);
            this.setState({ filmList: res.data.data.films });
        })
    }
    render() {
        return (
            <div>
                {
                    this.state.filmList.map((item) =>
                        <FilmItem {...item} key={item.filmId}></FilmItem>
                    )
                }

                    <FilmDetail />

            </div>
        )
    }
}

// 调度中心
var bus = {
    list: [],
    // 订阅
    subscribe(callback) {
        this.list.push(callback)
    },

    // 发布
    publish(text) {
        // 遍历所有列表，执行回调
        this.list.forEach((callback) => {
            // 可以传递参数
            callback && callback(text)
        })
    }
}

// 发布者
class FilmItem extends React.Component {
    render() {
        console.log(this.props);
        const { name, poster, grade, synopsis } = this.props;
        return (
            <section className="film-item">
                <img src={poster} alt={name}></img>
                <h4 onClick={() => {
                    // 发布信息
                    bus.publish(synopsis)
                }}>{name}</h4>
                <div>
                    观众评分： {grade}
                </div>
            </section>
        )
    }
}

// 订阅者
class FilmDetail extends Component {
    // constructor(){
    //     super()
    //     bus.subscribe((res)=>{
    //         console.log(res);
    //         console.log('filmDetail中定义的订阅');
    //     })
    // }
    state = {
        info: ''
    }
    componentDidMount() {
        bus.subscribe((res) => {
            console.log(res);
            console.log('filmDetail中定义的订阅');
            this.setState({ info: res })
        })
    }
    render() {
        return <div className="film-detail">
            {this.state.info}
        </div>
    }
}

