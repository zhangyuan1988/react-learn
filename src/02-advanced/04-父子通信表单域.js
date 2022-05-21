import React, { Component } from 'react'

export default class App extends Component {
    state = {
        username: localStorage.getItem('username'),
        password: ''
    }
    render() {
        return (
            <div>
                <h1>登录页面</h1>
                <Field label='用户名' type='text' value={this.state.username} onChange={(val) => {
                    console.log(val);
                    this.setState({
                        username: val,
                    })
                }}></Field>
                <Field label='密码' value={this.state.password} type='password' onChange={(val) => {
                    console.log(val);
                    this.setState({
                        password: val,
                    })
                }}></Field>
                <button type='submit' onClick={() => {
                    console.log(this.state.username);
                }}>登录</button>
                <button onClick={() => {
                    this.setState({
                        password: '',
                        username: ''
                    })
                }}>取消</button>
            </div>
        )
    }
}


class Field extends Component {
    render() {
        return (
            <div style={{ backgroundColor: 'yellow' }}>
                <label>{this.props.label}</label>
                <input type={this.props.type} value={this.props.value} onChange={(event) => {
                    console.log(event.target.value);
                    this.props.onChange(event.target.value)
                }} />
            </div>
        )
    }
}
