import React, { Component,forwardRef } from 'react'

export default class App extends Component {

    myref = React.createRef()

    render() {
        return (
            <div>
                <button onClick={() => {
                    console.log(this.myref);
                    this.myref.current.value = ''
                    this.myref.current.focus()
                }}>获取焦点 </button>

                <Child ref={this.myref}/>
            </div>
        )
    }
}

// 第一个参数是属性，第二个是透传来的ref 直接在组件里使用
const Child = forwardRef((props,ref) => {
    return (
        <div style={{ backgroundColor: 'yellow' }}>
            clild
            <input ref={ref} defaultValue='111' />
        </div>
    )
})