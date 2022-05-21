import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {
    state = {
        type: 1
    }
    render() {
        return (
            <div>
                <ul>
                    <li onClick={() => {
                        this.setState({ type: 1 });
                    }}>正在热映</li>
                    <li onClick={() => {
                        this.setState({ type: 2 });
                    }}>即将上映</li>
                </ul>

                <Filmlist type={this.state.type}></Filmlist>
            </div>
        )
    }
}


class Filmlist extends Component {
    // WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.
    // 处于查找dom阶段 非高优任务
    UNSAFE_componentWillReceiveProps(nextProps) {
        console.log(this.props.type);
        if (nextProps.type === 1) {
            // 请求正在热映的
            console.log('正在热映数据');
            axios({
                url: 'https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=8275221',
                method: 'GET',
                headers: {
                    'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"164864080277695958384641"}',
                    'X-Host': 'mall.film-ticket.film.list'
                }
            }).then((res) => {
                console.log(res);
                this.setState({ list: res.data.data.films });
            })
        } else {
            // 请求即将上映数据
            console.log('请求即将上映数据');
            axios({
                url: 'https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=2&k=5366943',
                method: 'GET',
                headers: {
                    'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"164864080277695958384641"}',
                    'X-Host': 'mall.film-ticket.film.list'
                }
            }).then((res) => {
                console.log(res);
                this.setState({ list: res.data.data.films });
            })
        }

    }

    // 只在初始化创建的时候执行一次，不适合做数据请求
    // 后续组件更新不会再执行
    // 第一次执行的
    componentDidMount() {
        console.log(this.props.type);
        if (this.props.type === 1) {
            // 请求正在热映的
            console.log('正在热映数据');
            axios({
                url: 'https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=8275221',
                method: 'GET',
                headers: {
                    'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"164864080277695958384641"}',
                    'X-Host': 'mall.film-ticket.film.list'
                }
            }).then((res) => {
                console.log(res.data.data.films);
                this.setState({ list: res.data.data.films });
            })
        } else {
            // 请求即将上映数据
            console.log('请求即将上映数据');
            axios({
                url: 'https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=2&k=5366943',
                method: 'GET',
                headers: {
                    'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"164864080277695958384641"}',
                    'X-Host': 'mall.film-ticket.film.list'
                }
            }).then((res) => {
                console.log(res);
            })
        }
    }

    state = {
        list: []
    }

    render() {
        console.log('render');
        return (
            <div>
                <ul>
                    {
                        this.state.list.map((item) => (
                            <li key={item.filmId}>{item.name}</li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}