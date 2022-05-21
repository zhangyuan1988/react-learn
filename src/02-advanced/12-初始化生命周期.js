import React, { Component } from 'react'

export default class App extends Component {
    // 将要挂载到dom 相当于created 无法操作dom
    // 访问状态或者修改状态 
    // 第一次上树前 最后一次修改状态的机会
    // 已经启用 可以使用didMount 16.2之后移除
    // 16.2之后提出fiber技术 分片任务 willMount 低优先级
    // 查找正在更新的dom 
    UNSAFE_componentWillMount () {
        console.log('第一次 componentWillMount');
    }

    // dom挂载完毕 相当于 mounted 可以操作dom
    // 请求数据放在这里 订阅函数调用 计时器 高优先级
    componentDidMount() {
        console.log('第一次 componentDidMount');
    }
    render() {// 高优先级
        console.log('render 正在渲染dom');
        return (
            <div>
                    aa
            </div>
        )
    }
}
