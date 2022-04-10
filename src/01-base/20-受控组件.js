import React, { Component } from 'react'

export default class App extends Component {

    //   myUserName = React.createRef()

    state = {
        userName: 'aaaa'
    }

    login() {
        console.log(this.setState.userName);
    }

    reset() {
        // 只有调用setState时 才会再次执行render
        this.setState({ userName: '' });
    }

    changeInput = (event) => {
        console.log(event);
        this.setState({ userName: event.target.value });
    }

    render() {
        return (
            <div>
                <h1>登录</h1>
                {/* 把value做成状态，直接修改状态 */}
                {/*React 中 onChange 和 onInput 同效 */}
                <input type="text" onChange={this.changeInput} value={this.state.userName}></input>
                <button onClick={() => {
                    this.login()
                }}>登录</button>
                <button onClick={() => {
                    this.reset()
                }}>重置</button>

                {/* eslint-disable-next-line react/jsx-no-undef */}
                {/* <Child myname={this.myUserName.current.value}></Child> */}
            </div>
        )
    }
}
