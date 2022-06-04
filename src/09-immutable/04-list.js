import React, { Component } from 'react'
import { List } from 'immutable'

const arr = List([1, 2, 3])
console.log(arr);
// 不会影响老的结构
const arr2 = arr.push(4)
const arr3 = arr2.concat([5, 6, 7])
console.log(arr2.toJS());
console.log(arr3, arr3.toJS());

export default class App extends Component {
    state = {
        favorites: List([1, 2, 3])
    }
    render() {
        return (
            <div>
                {this.state.favorites.map((item) => (
                    <li key={item}>

                        {item}
                    </li>
                ))}
            </div>
        )
    }
}
