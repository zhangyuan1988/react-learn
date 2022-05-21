import React, { Component } from 'react'



class Child extends Component {
    render() {
        console.log(this.props.children);
        return (
            <div>
                child
                {/* 插槽 固定写法*/}
                {/* 插槽的具名 使用数组索引就行 */}
                {this.props.children[0]}
                {this.props.children[2]}
                {this.props.children[1]}
            </div>
        )
    }
}

class Swiper extends Component {
    render() {
        return (
            <div>
                Swiper
            </div>
        )
    }
}

export default class App extends Component {
  render() {
    return (
      <div>
          <Child>
             <div>
                111
             </div>
             <div>
                 122
             </div>
             <div>
                 333
             </div>
          </Child>
          <Swiper></Swiper>
      </div>
    )
  }
}


/**
 * 1.为了复用
 * 2.一定程度减少父子通信
 */