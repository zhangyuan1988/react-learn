import React, { Component } from 'react'

export default class App extends Component {
    // 静态方法

    // 初始化会执行  更新中也会执行 父传子中也会调用
    // 接收两个参数 下一个props 和 上一次被修改后最新的的state
    // 因为是静态的 该方法里没有this undefined
    // 代替componentWillMount 和 componentReciveProps
    static getDerivedStateFromProps(nextProps, nextState) {
        // 此时state已经被修改但还未渲染 拿到的就是修改后的state
        console.log(nextState);

        // 初始化 必须要return 值 返回的结果会把state中的数据合并
        // 同名的会覆盖
        // 多次调用指回引发一次
        return {
            myname: nextState.myname,
            add: 'true'
        }
    }

    state = {
        myname: 'fuzi'
    }
    render() {
        console.log('render');
        return (
            <div>
                <Child myname={this.state.myname}></Child>
                <button onClick={() => {
                    this.setState({ myname: '小名' })
                }}>
                    click
                </button>
                {this.state.myname}
                {this.state.add}
            </div>
        )
    }
}

class Child extends Component {
    static getDerivedStateFromProps(nextProps, nextState) {
        console.log('Child getDerivedStateFromProps');
        return{}
    }
    state = {}
    render() {
        return (
            <div>
                child
            </div>
        )
    }
}