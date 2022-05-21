import React, { Component } from 'react'

export default class App extends Component {
    // 通过ref访问子组件的值

    state = {
        username:localStorage.getItem('username'),
    }

    componentDidMount(){
        // 设置子组件
        this.username.current.set(this.state.username)
    }

    username = React.createRef()
    password = React.createRef()

    render() {
        return (
            <div>
                <h1>登录页面</h1>
                <Field label='用户名' type='text' ref={this.username}></Field>
                <Field label='密码' type='password' ref={this.password}></Field>
                <button type='submit' onClick={() => {
                    // 通过ref访问到子组件的state
                    // console.log(this.username.current.state.value);
                    console.log(this.username.current.get());
                }}>登录</button>
                <button onClick={() => {

                    // 访问子组件的方法
                    console.log(this.username.current);
                    this.username.current.clear()
                    this.password.current.clear()
                }}>取消</button>
            </div>
        )
    }
}


class Field extends Component {
    state = {
        value: ''
    }

    // 提供给父组件使用
    clear() {
        this.setState({ value: '' })
    }
    // 有种面向对象的思想
    set(value) {
        this.setState({ value })
    }
    get(){
        return this.state.value
    }
    render() {
        return (
            <div style={{ backgroundColor: 'yellow' }}>
                <label>{this.props.label}</label>

                {/* 将标签变成受控的 */}
                <input type={this.props.type} value={this.state.value} onChange={(event) => {
                    console.log(event.target.value);
                    this.setState({
                        value: event.target.value
                    })
                }} />
            </div>
        )
    }
}
