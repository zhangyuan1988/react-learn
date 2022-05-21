import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>App</div>
    )
  }
}

// 调度中心
var bus = {
  list: [],
  // 订阅
  subscribe(callback) {
    this.list.push(callback)
  },

  // 发布
  publish(text) {
    // 遍历所有列表，执行回调
    this.list.forEach((callback) => {
      // 可以传递参数
      callback && callback(text)
    })
  }
}

// 进行订阅  
bus.subscribe((res) => {
  console.log(res);
})

bus.subscribe((res) => {
  console.log(res);
})

bus.subscribe((res) => {
  console.log(res);
})

// 发布者
setTimeout(() => {
  bus.publish('看到沉默')
}, 0);