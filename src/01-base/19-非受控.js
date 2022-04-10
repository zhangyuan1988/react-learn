import React, { Component } from 'react'

export default class App extends Component {

  myUserName = React.createRef()

  login() {
    console.log(this.myUserName.current.value);
  }

  reset() {
    this.myUserName.current.value = ''
  }

  render() {
    return (
      <div>
        <h1>登录</h1>
        {/*  defaultValue 非受控(没有状态控制) 一般少用，只用了完成自己内部任务*/}
        <input type="text" ref={this.myUserName} defaultValue='aaa'></input>
        <button onClick={() => {
          this.login()
        }}>登录</button>
        <button onClick={() => {
          this.reset()
        }}>重置</button>

        {/* 非受控， 无法传递值给组件 */}
        {/* eslint-disable-next-line react/jsx-no-undef */}
        <Child myname={this.myUserName.current.value}></Child>
      </div>
    )
  }
}
