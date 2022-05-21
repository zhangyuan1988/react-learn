import React, { Component } from 'react'
import Film from './maizuocomponents2/Film'
import Cinema from './maizuocomponents2/Cinema'
import Owner from './maizuocomponents2/Owner'
import Tabbar from './maizuocomponents2/TabbarFc'
import Navbar from './maizuocomponents2/Navbar'
import './css/02-maizuo.css'

export default class App extends Component {
    state = {
        list: [
            { id: 1, text: '电影' },
            { id: 2, text: '影院' },
            { id: 3, text: '我的' },
        ],
        current: 0
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

                <Tabbar current={this.state.current} list={this.state.list} event={(event) => {
                    // 回调函数
                    console.log(event);
                    this.setState({ current: event })
                }}></Tabbar>
            </>
        )
    }
}
