import React, { Component } from 'react'

export default class App extends Component {
    state = {
        list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }
    myref = React.createRef()
    getColor() {
        const color = ['skyblue', 'blue', 'pink', 'orange', 'yellow']
        const idx = Math.floor(Math.random() * 5)
        return color[idx]
    }
    getSnapshotBeforeUpdate() {
        // 获取当前滚动高度
        console.log(this.myref.current.scrollHeight- this.myref.current.scrollTop);
        // 更新之前的高度 记录 当前滚动的高度
        //  记录 当前距离底部的高度
        return this.myref.current.scrollHeight - this.myref.current.scrollTop
    }
    componentDidUpdate(prevProps, prevState, value) {
        // 更新之后的高度
        console.log(this.myref.current.scrollTop);
        console.log('componentDidUpdate');
        // 滚动高度 更新后的减去更新前的高度即可
        // 当前总高度减去 之前滚动的高度
        this.myref.current.scrollTop = this.myref.current.scrollHeight - value
    }
    render() {
        return (
            <div>
                <button onClick={() => {
                    // const list = [...this.state.list]
                    // list.unshift(list.length + 1)
                    const newList = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28]
                    this.setState({
                        list: [...newList, ...this.state.list]
                    })
                }}>new</button>
                 <button onClick={() => {
                    // const list = [...this.state.list]
                    // list.unshift(list.length + 1)
                    const newList = [1, 22, 23, 24, 25, 26, 27, 28]
                    this.setState({
                        list: [...newList, ...this.state.list]
                    })
                }}>new</button>
                <h1>邮箱应用</h1>
                <div style={{ height: '200px', overflow: 'auto' }} ref={this.myref}>
                    <ul>
                        {
                            this.state.list.map((item, index) => (
                                <li key={index} style={{ height: '100px', border: '1px solid pink', background: this.getColor() }}>
                                    {item}
                                </li>
                            ))
                        }
                    </ul>
                </div>


            </div>
        )
    }
}
