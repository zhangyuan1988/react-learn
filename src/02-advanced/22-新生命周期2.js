import React, { Component } from 'react'

export default class App extends Component {
    state = {
        mytext: '111'
    }

    // UNSAFE_componentWillUpdate() {
    //     console.log('componentWillUpdate');
    // }
    // 第三个属性是 getSnapshotBeforeUpdate 返回的值
    componentDidUpdate(prevProps, prevState,value) {
        console.log('componentDidUpdate');
        console.log(value);
    }

    // 非静态方法 接收两个参数 上一次的  属性和状态
    // 必须和componentDidUpdate组合使用
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('getSnapshotBeforeUpdate');
        console.log(prevProps, prevState);
        return 100;
    }
    render() {
        console.log('render');
        return (
            <div>
                app
                <button onClick={() => {
                    this.setState({ mytext: '222' })
                }}>click</button>
                {this.state.mytext}
            </div>
        )
    }
}
