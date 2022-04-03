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
        // this 找不到 指向undefined
        console.log('add2', this);
    }

    handleClick2 = (evt) => {
        evt.stopPropagation()
        evt.preventDefault()
        console.log(evt.stopPropagation());
        console.log('add3', this.a);
        // const list = this.state.list
        // list.push({ msg: 345 })
        // this.setState({
        //     list
        // });
    }

    handleClick3() {
        console.log('add4', this.a);
    }

    a = 2

    // 采用on+事件名的方式来绑定一个事件，注意，这里和原生的事件是有区别的，原生的事件全是小写
    // onclick , React里的事件是驼峰 onClick ，React的事件并不是原生事件，而是合成事件。
    // react不会真正绑定事件到每一个真正的元素上，而是采用事件代理的模式，绑定到了根节点上，采用冒泡方式
    render() {
        return (
            <div>
                <section>
                    <input type="text" ></input>
                    <button onClick={() => {
                        console.log('add1', this.a);
                    }}>add1</button>

                    {/* this指向难确定 */}
                    <button onClick={this.handleClick1.bind(this)}>add2-不推荐</button>
                    <button onClick={this.handleClick2}>add3</button>
                    {/* 推荐写法，多个函数放在一起 */}
                    <button onClick={() => this.handleClick3()}>add4-非常推荐</button>
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
