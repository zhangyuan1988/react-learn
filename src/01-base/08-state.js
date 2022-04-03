import React, { Component } from 'react'

export default class App extends Component {

    constructor() {
        super()
        this.state = {
            mytext: '收藏',
            myshow: false,
            myname: 'fufu'
        }
    }

    // state = {
    //     mytext: '收藏',
    //     myshow: false
    // }

    handleClick() {
        this.setState({
            myshow: !this.state.myshow,
            myname: '小明'
        })

        if (this.state.myshow) {
            // 取消收藏逻辑
        } else {
            // 收藏逻辑
        }
    }
    render() {
        return (
            <div>
                <h1>欢迎来到reactjs---{this.state.myname}</h1>

                <button onClick={() => {
                    //  this.setState({
                    //     myshow: !this.state.myshow
                    // })

                    this.handleClick()
                }}>{this.state.myshow ? '取消收藏' : '收藏'}</button>
            </div>
        )
    }
}
