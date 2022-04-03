import React, { Component } from "react";

export default class App extends Component {

    constructor(props) {
        super()
    }

    state = {
        list: [
            {
                msg: '123'
            },
            {
                msg: '123'
            },
            {
                msg: '123'
            }
        ]
    }

    handleClick1() {
        // this 找不到 指向undefined
        console.log('add2', this);
    }

    // 采用on+事件名的方式来绑定一个事件，注意，这里和原生的事件是有区别的，原生的事件全是小写
    // onclick , React里的事件是驼峰 onClick ，React的事件并不是原生事件，而是合成事件。
    // react不会真正绑定事件到每一个真正的元素上，而是采用事件代理的模式，绑定到了根节点上，采用冒泡方式

    // 通过该方法创建
    myref = React.createRef()
    render() {
        return (
            <div>
                <section>
                    {/* <input type="text" ref='mytext'></input> */}
                    <input type="text" ref={this.myref}></input>

                    <button onClick={() => {
                        // console.log('add1', this.refs.mytext.value);
                        console.log('click', this.myref.current.value);
                    }}>add1</button>
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
