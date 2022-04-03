import React, { Component } from 'react'
import Navbar from './Navbar'

export default class App extends Component {
    render() {
        const obj = {
            title: '你好',
            leftshow: false
        }
        return (
            <>
                <div>
                    <h2>首页</h2>
                    <Navbar title="首页" leftshow={false} />
                </div>
                <div>
                    <h2>列表</h2>
                    <Navbar title="列表" leftshow={true} />
                </div>
                <div>
                    <h2>购物车</h2>
                    <Navbar title="购物车" />
                </div>

                {/* 属性名相同时可以简写 */}
                <Navbar {...obj} />
            </>
        )
    }
}
