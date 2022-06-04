import React, { Component } from 'react'
import { Map } from 'immutable'

// map 将一个对象转为immutable对象

const obj = {
    name: 'fz',
    age: 100
}

const oldImmuObj = Map(obj)

const newImmuObj = oldImmuObj.set('name', 'xiaoming')
// console.log(oldImmuObj);
// console.log(newImmuObj);

// 获取immutable
console.log(oldImmuObj.get('name'), newImmuObj.get('name'));

// immutable===>普通对象结构

console.log(newImmuObj.toJS());

// export default class App extends Component {

//     // 在内部使用   
//     state = {
//         info: Map({
//             name: 'fz',
//             age: 100
//         })
//     }
//     render() {
//         return (
//             <div>
//                 <button onClick={() => {
//                     // 可以链式调用
//                     // 直接重新给info赋值
//                     this.setState({
//                         info: this.state.info.set('name', 'xiaoming')
//                             .set("age", 18)
//                     })
//                 }}>click</button>
//                 {this.state.info.get('name')}---
//                 {this.state.info.get('age')}
//             </div>
//         )
//     }
// }

export default class App extends Component {

    // 在内部使用   
    state = {
        info: {
            name: 'fz',
            age: 100
        }
    }
    render() {
        return (
            <div>
                <button onClick={() => {
                    const old = Map(this.state.info)
                    const newObj = old.set('name', 'xiaoming').set('age', 18)
                    this.setState({
                        info: newObj.toJS()
                    })
                }}>click</button>
                {this.state.info.name}---
                {this.state.info.age}
            </div>
        )
    }
}
