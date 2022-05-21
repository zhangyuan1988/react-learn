import React, { Component } from 'react'

class Child extends Component {
    // 父组件只有触发setState更新的 无论是否传递属性 都会触发
    // 将要得到新的属性之前 接受形参 新的属性
    // 最先获取父组件传来的属性 可以利用此属性进行ajax操作或逻辑处理
    // 把属性转化成自己的状态

    UNSAFE_componentWillReceiveProps(nextProps){
        // 1
        // 此时访问this.props 访问的是老的
        this.setState({title:nextProps.text})
        console.log(this.props,nextProps);
        console.log('componentWillReceiveProps');
    }
    shouldComponentUpdate(nextProps, nextState) {
        // 2
        console.log('shouldComponentUpdate');
        return true
    }
    UNSAFE_componentWillUpdate() {
        // 3
        console.log('componentWillUpdate');
    }
    componentDidUpdate() {
        // 5
        console.log('componentDidUpdate');

    }
    state={
        title: ''
    }
    render(){
        // 4
        console.log('render');
        return (
            <div>
              Child  --- {this.state.title}
            </div>
        )
    }
}

export default class App extends Component {

    state={
        text:'11111'
    }
    render() {
        return (
            <div>
                {
                    this.state.text
                }
                <button onClick={()=>{this.setState({text:'222'})}}>click</button>
                <Child text={this.state.text}/>
            </div>
        )
    }
}