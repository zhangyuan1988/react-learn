import React, { Component } from 'react'

export default class App extends Component {
 
    mytext = null
    render() {
        return (
            <div>
                <button onClick={() => {
                    this.mytext.current.value = ''
                    this.mytext.current.focus()
                }}>获取焦点 </button>

                <Child callback={(el) => {
                    console.log(el);
                    this.mytext = el
                }} />
            </div>
        )
    }
}

class Child extends Component {
    mytext = React.createRef()

    componentDidMount() {
        // 传递元素
        this.props.callback(this.mytext)
    }

    render() {
        return (
            <div style={{ backgroundColor: 'yellow' }}>
                clild
                <input ref={this.mytext} defaultValue='111' />
            </div>
        )
    }
}