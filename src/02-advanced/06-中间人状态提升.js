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
    }

    componentDidMount() {
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
                        <FilmItem {...item} key={item.filmId} onEvent={(evt) => {
                            console.log(evt);
                            // 接收组件传递来的数据
                            this.setState({
                                currentDetail: evt
                            })
                        }}></FilmItem>
                    )
                }

                <FilmDetail detail={this.state.currentDetail}>

                </FilmDetail>
            </div>
        )
    }
}

class FilmItem extends React.Component {
    render() {
        console.log(this.props);
        const { name, poster, grade, synopsis, onEvent } = this.props;
        return (
            <section className="film-item">
                <img src={poster} alt={name}></img>
                {/* 呼叫父组件 */}
                <h4 onClick={() => {
                    onEvent(synopsis)
                }}>{name}</h4>
                <div>
                    观众评分： {grade}
                </div>
            </section>
        )
    }
}

class FilmDetail extends Component {
    render() {
        return <div className="film-detail">
            {this.props.detail}
        </div>
    }
}
