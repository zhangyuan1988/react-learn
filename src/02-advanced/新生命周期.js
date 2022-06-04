import React, { Component } from 'react'

export default class App extends Component {
    // 初始化会执行  更新中也会执行 父传子中也会调用
    // 接收两个参数 下一个props 和 上一次被修改后最新的的state
    // 因为是静态的 该方法里没有this undefined
    // 代替componentWillMount 和 componentReciveProps
    // 这个函数只做状态的保存 转成自己的状态 需要配合componentDiduUpdate使用
    // 该函数即使多次触发 也没问题 因为返回的是合并state中的数据
    static getDerivedStateFromProps() {
        console.log('getDerivedStateFromProps--1');
        return {}
    }

    // 可以代替componentWillUpdate 更新阶段
    // render之后 dom渲染之前 didUpdate之前执行
    getSnapshotBeforeUpdate(prevProps, prevState) {

    }



    componentDidMount() {
        console.log('componentDidMount---3');
    }


    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate---2');
        return true
    }


    componentDidUpdate() {
        console.log('componentDidUpdate---4');
    }



    state = {
        name: 'aaa'
    }

    render() {
        console.log('render---2---3');
        return (
            <div>
                <button onClick={() => {
                    this.setState({ name: 'xxx' })
                }}>
                    click
                </button>
                <Child value={this.state.name}></Child>
            </div>
        )
    }
}

class Child extends Component {
    static getDerivedStateFromProps() {
        console.log('child---getDerivedStateFromProps');
        return {}
    }

    componentDidMount() {
        console.log('child--componentDidMount');
    }


    shouldComponentUpdate(nextProps, nextState) {
        console.log('child--shouldComponentUpdate');
        return true
    }


    componentDidUpdate() {
        console.log('child--componentDidUpdate');
    }
    state = {
        name: 'aaa'
    }
    render() {
        console.log('child--render');
        return (
            <div>
                child
            </div>
        )
    }
}