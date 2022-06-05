import React, { Component } from 'react'
import { observable, autorun } from 'mobx'

// 对于普通数据的监听 必须用box
const observableNumber = observable.box(10)

const observableName = observable.box('fiz')

// 监听对象变化
// 第一次会执行一次，之后每次改变也会执行
autorun(() => {
    // 内部使用了哪个对象 才会执行，只关心自己关系的对象 细粒度
    // 所以在执行observableName 这个函数不会执行
    console.log(observableNumber.get());
})

// 可以有多个
autorun(() => {
    console.log(observableName.get());
})


setTimeout(() => {
    observableNumber.set(20)
    observableName.set('小明')
}, 1000)

// // 监听复杂数据类型
// const myobj = observable.map({
//     name: 'fzzzzzz',
//     age: 100
// })

// autorun(() => {
//     console.log(myobj.get('name'));
// })

// setTimeout(() => {
//     myobj.set('name', 'xxxxxx')
// }, 2000)

// 监听复杂数据类型
const myobj = observable({
    name: 'fzzzzzz',
    age: 100
})

autorun(() => {
    console.log(myobj.name);
})

setTimeout(() => {
    myobj.name = 'xxxxxxx'
}, 2000)

export default class App extends Component {
    render() {
        return (
            <div>App</div>
        )
    }
}
