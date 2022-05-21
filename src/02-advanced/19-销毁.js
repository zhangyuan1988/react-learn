import React, { Component } from 'react';

export default class App extends Component {

    state = {
        isChecked: true
    }
    render() {
        return (
            <div>
                <button onClick={() => {
                    this.setState({ isChecked: !this.state.isChecked })
                }}>click</button>
                {
                    this.state.isChecked && <Child></Child>
                }
            </div>
        )
    }
}

class Child extends Component {
    componentDidMount() {
        window.onresize = (res) => {
            console.log(res);
        }
        // 定时器可以挂在this上 不需要声明状态
        this.timer = setInterval(() =>{
            console.log(1);
        },1000)
    }
    // 组件卸载
    componentWillUnmount() {
        console.log('componentWillUnmount');
        window.onresize = null
        clearInterval(this.timer)
    }
    render() {
        return (
            <div>
                child
            </div>
        )
    }
}