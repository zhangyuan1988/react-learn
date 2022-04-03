import React, { Component } from "react";

export default class App extends Component {

    constructor(props) {
        super()
    }

    state = {
        list: [
            {
                msg: '123'
            }
        ]
    }

    handleClick1() {
        console.log('add2');
    }

    handleClick2 = () => {
        console.log('add3');
        // const list = this.state.list
        // list.push({ msg: 345 })
        // this.setState({
        //     list
        // });
    }

    handleClick3 = () => {
        console.log('add4');
    }


    render() {
        return (
            <div>
                <section>
                    <input type="text" ></input>
                    <button onClick={() => {
                        console.log('add1','处理逻辑多，不好看');
                    }}>add1</button>

                    {/* this指向难确定 */}
                    <button onClick={this.handleClick1}>add2</button>
                    <button onClick={this.handleClick2}>add3</button>
                    <button onClick={() => {
                        // 推荐写法，多个函数放在一起
                        this.handleClick3()
                    }}>add4</button>
                </section>

                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return (
                                <li key={index}>
                                    <span>{item.msg}</span>
                                    <button>del</button>
                                </li>
                            )
                        })
                    }

                </ul>
            </div>
        )
    }
}
