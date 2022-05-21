import React, { Component } from 'react'
import axios from 'axios'
import BetterScroll from 'better-scroll'

export default class App extends Component {
  state = {
    myname: 'fufu',
    list: []
  }

  // 每次setState 都会触发
  // 状态已经更新
  // 组件dom将要更新 无法拿到更新后的dom信息 只能拿到更新前的
  // 处在调度机制第一阶段，只是要找出哪些要更新的dom 此阶段可以被高优任务打段，因此可能会再执行一次 会不安全
  componentWillUpdate() {
    // 不可以在里面使用setState 会死循环
    console.log('componentWillUpdate', document.getElementById('myname').innerHTML);
  }

  componentDidMount() {
    axios.get('/test.json').then((res) => {
      console.log(res.data.data.films);
      this.setState({ list: res.data.data.films });
    })
  }

  // 每次setState 都会触发
  // 组件dom已经更新 拿到的是更新后的dom信息
  // 接受两个参数，第一个是老的属性，第二个是老的状态
  // 不可以在里面使用setState 会死循环
  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate', document.getElementById('myname').innerHTML);
    // 访问真实dom
    // 不知道setState 处在同步还是异步时（如didMount是从本地取数据，说明是同步的 需要使用setState回调才能获取dom，此时可以在这里获取dom），可以放这里操作dom
    // 防止多次调用 可以通过形参 配置
    console.log(prevProps,prevState);
    if(prevState.list.length === 0){
      // 0的时候执行 之后不再执行了
      new BetterScroll('#warpper')
    }
  }
  render() {
    console.log('render');
    return (
      <div>
        <button onClick={() => {
          this.setState({ myname: 'tt' })
        }}>ad</button>
        <span id="myname">{this.state.myname}</span>

        <div id="warpper" style={{ backgroundColor: 'yellow', overflow: 'hidden', height: '100px' }}>
          <ul>
            {this.state.list.map((item, index) => (<li key={item.filmId}>
              {item.name}
            </li>))}
          </ul>
        </div>
      </div>
    )
  }
}
