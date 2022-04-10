import React, { Component } from 'react'

class Navbar extends Component {

    render() {
        // 和传属性一致，接收的是函数 可以直接执行
        const { event } = this.props
        return (
            <div style={{ backgroundColor: 'red' }}>
                <button onClick={() => {
                    // 访问执行父组件传递来的回调函数
                    event('1234')
                    // console.log(this.props.event);
                }}>click</button>
                <span>navbar</span>
            </div>
        )
    }
}

class Sidebar extends Component {
    render() {
        return (
            <div style={{ backgroundColor: 'yellow', width: '200px' }}>
                <ul>
                    <li>111111111</li>
                    <li>111111111</li>
                    <li>111111111</li>
                    <li>111111111</li>
                    <li>111111111</li>
                    <li>111111111</li>
                    <li>111111111</li>
                    <li>111111111</li>
                </ul>
            </div>
        )
    }
}


export default class App extends Component {
    state = {
        isShowing: false,
    }
    handleEvent = (event) => {
        // 接收子组件传递来的参数
        console.log(event);
        // 父组件定义的event事件
        this.setState({
            isShowing: !this.state.isShowing
        })
    }
    render() {
        return (
            <div>

                {/* 子组件传递的回调函数，可以用来子传父 */}
                <Navbar event={this.handleEvent}></Navbar>

                {this.state.isShowing && <Sidebar></Sidebar>}

            </div>
        )
    }
}
