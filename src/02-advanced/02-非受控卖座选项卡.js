import React, { Component } from 'react'
import Film from './maizuocomponents/Film'
import Cinema from './maizuocomponents/Cinema'
import Owner from './maizuocomponents/Owner'
import Tabbar from './maizuocomponents/Tabbar'
import Navbar from './maizuocomponents/Navbar'
import './css/02-maizuo.css'

export default class App extends Component {
    state = {
        current: 1
    }

    // 渲染函数
    which() {
        if (this.state.current === 0) {
            return <Film></Film>
        } else if (this.state.current === 1) {
            return <Cinema></Cinema>
        } else {
            return <Owner></Owner>
        }
    }

    render() {
        return (
            <>
                {/* 回调函数接收数据 */}
                <Navbar event={(index) => {
                    this.setState({ current: index })
                }}></Navbar>

                {
                    this.state.current === 0 && <Film></Film>
                }
                {
                    // this.state.active === 1 && <Cinema></Cinema>
                }
                {
                    this.state.current === 2 && <Owner></Owner>
                }


                {/* 直接写函数表达式 */}
                {
                    this.which()
                }

                <Tabbar defaultValue={this.state.current} event={(event) => {
                    // 回调函数
                    console.log(event);
                    this.setState({ current: event })
                }}></Tabbar>
            </>
        )
    }
}
