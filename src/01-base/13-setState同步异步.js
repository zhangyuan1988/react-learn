import React, { Component } from 'react'

export default class App extends Component {

    state = {
        count: 1
    }

    handleAdd1 = () => {
        // 同步逻辑中连续多次调setState时 合并标志位为true 会合并处理，不会引发多次虚拟dom对比, 会将当前宏任务执行完毕
        // setState 处在同步逻辑中 是异步更新状态，异步更新真实dom
        // setState 处在异步逻辑中 会同步更新状态 同步更新真实状态
        this.setState({ count: this.state.count + 1 }, () => {

        });
        // 访问的还是原来的count
        console.log(this.state.count);

        this.setState({ count: this.state.count + 1 }, () => {
            // 访问的是最新的count 此时状态和真实dom已经更新完了
            console.log(this.state.count);
        });
        console.log(this.state.count);

        this.setState({ count: this.state.count + 1 }, () => {
            console.log(this.state.count);
        });
    }

    handleAdd2 = () => {
        setTimeout(() => {
            this.setState({ count: this.state.count + 1 });
            console.log(this.state.count);
            this.setState({ count: this.state.count + 1 });
            console.log(this.state.count);
            this.setState({ count: this.state.count + 1 });
            console.log(this.state.count);
        })
    }

    render() {
        return (
            <div>

                {this.state.count}
                <button onClick={this.handleAdd1}>add1</button>
                <button onClick={this.handleAdd2}>add2</button>
            </div>
        )
    }
}
