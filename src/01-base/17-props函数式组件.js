
import React, { Component } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
export default class App extends Component {
    render() {
        return (
            <div>
                {/* 类组件 */}
                <Navbar title="欢迎"></Navbar>
                {/* 函数式组件 */}
                <Sidebar bg="yellow" position="left"></Sidebar>
            </div>
        )
    }
}

