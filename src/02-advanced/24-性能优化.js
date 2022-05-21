import React, { Component,PureComponent } from 'react'

// PureComponent 优化组件 吐过state或者props永远在变 就不适用 如倒计时
export default class App extends PureComponent {
    state = {
        myname: 'fufu'
    }
    // 控制组件是否重新渲染
    // 任何ture和false
    // 在componentWillUpdate之前执行 每次 setState 后执行
    // 两个参数 新的属性nextProps  新的状态nextState
    // 也叫性能优化函数
    // shouldComponentUpdate(nextProps, nextState) {
    //     // 1
    //     console.log('shouldComponentUpdate');
    //     // 老的状态不等于新状态 对比
    //     // 对比两个状态中的所有内容
    //     // return JSON.stringify(this.state) !== JSON.stringify(nextState)
    //     return this.state.myname !== nextState.myname
    // }
    // 状态已经更新
    UNSAFE_componentWillUpdate() {
        // 2
        console.log('UNSAFE_componentWillUpdate');

    }
    componentDidUpdate() {
        //  4
        console.log('componentDidUpdate');

    }

    render() {
        // 3
        console.log('render');
        return (
            <div>
                <button onClick={() => {
                    this.setState({ myname: 'tt' })
                }}>ad</button>
                <span id="myname">{this.state.myname}</span>
            </div>
        )
    }
}
