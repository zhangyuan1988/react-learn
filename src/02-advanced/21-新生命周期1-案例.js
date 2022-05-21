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

    static getDerivedStateFromProps(nextProps, nextState) {
        console.log('getDerivedStateFromProps');
        // 立即执行 发起的axios无法将list 重新覆盖成新的 
        // 这个函数只做状态的保存 转成自己的状态 需要配合componentDiduUpdate使用
        // 该函数即使多次触发 也没问题 因为返回的是合并state中的数据
        return {
            type: nextProps.type
        }
    }

    // 代替componentWillUpdate 更新阶段
    // render之后 dom渲染之前 didUpdate之前执行
    getSnapshotBeforeUpdate(prevProps, prevState) {
        
    }

    // 只在初始化创建的时候执行一次
    // 后续组件更新不会再执行
    componentDidMount() {
        console.log('componentDidMount');
        this.getPageData()
    }

    // 数据更新完了进行请求数据
    // 有形参
    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate');

        // 通过形参判断是否需要执行 防止重复setState 导致无限循环
        if (prevState.type === this.state.type) {
            return
        }

        this.getPageData()
    }


    getPageData() {
        if (this.state.type === 1) {
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
                this.setState({
                    list: res.data.data.films
                })
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
                this.setState({
                    list: res.data.data.films
                })
            })
        }
    }

    state = {
        list: [],
        type: 1
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