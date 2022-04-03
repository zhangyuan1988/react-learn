import React, { Component } from 'react'




export default class App extends Component {
    state = {
        title: '2222'
    }
    render() {
        return (
            <div>
                <button onClick={() => {
                    this.setState({
                        title: '333'
                    })
                }}>父</button>
                <Child title={this.state.title}></Child>
            </div>
        )
    }
}

class Child extends Component {

    render() {
        return (
            <div>
                <button onClick={() => {
                    this.props.title = '555555'
                }}>子</button>
                Child
                title:{
                    this.props.title
                }
            </div>
        )
    }
}
