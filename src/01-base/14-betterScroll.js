import React, { Component } from 'react'
import BScroll from '@better-scroll/core'

export default class App extends Component {
    state = {
        list: []
    }
    getData() {
        const list = []
        for (let index = 0; index < 1000; index++) {
            list.push(index)
        }
        // 
        this.setState({ list: list },(res)=>{
            // 操作dom时，需要在setState异步更新状态下的 回调中做   
            new BScroll('.wrapper')
        })

        // 这里查不到新数据和dom
        console.log(this.state.list);
        
    }

    render() {
        return (
            <div>
                <button onClick={() => this.getData()}>click</button>
                <div className="wrapper" style={{height:'500px',backgroundColor:'pink',overflow:'hidden'}}>
                    <ul className="content">
                        {
                            this.state.list.map((item) => <li key={item}>{item}</li>)
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
