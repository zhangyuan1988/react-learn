import React, { Component } from 'react'

class Navbar extends Component {

    render() {
        // 和传属性一致，接收的是函数 可以直接执行
        return (
            <div style={{ backgroundColor: 'red' }}>
                {this.props.children}
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
    render() {
        return (
            <div>
                {/* 子组件传递的回调函数，可以用来子传父 */}
                <Navbar>
                    <button onClick={() => {
                        this.setState({
                            isShowing: !this.state.isShowing
                        })
                    }}>
                        click
                    </button>
                </Navbar>

                {this.state.isShowing && <Sidebar></Sidebar>}

            </div>
        )
    }
}
