

import React, { Component } from 'react'

export default class App extends Component {

    state = {
        list: [
            {id:1,text: '111'},
            {id:2,text: '222'},
            {id:3,text: '333'},
            {id:4,text: '444'}
        ]
    }
    render() {
        // const newList = this.state.list.map((item)=><li key={item}>{item}</li>)
        return (
            <div>
                <ul>
                    {
                        // 循环渲染使用map
                        this.state.list.map((item) => <li key={item.id}>{item.text}</li>)
                    }
                </ul>
            </div>
        )
    }
}
