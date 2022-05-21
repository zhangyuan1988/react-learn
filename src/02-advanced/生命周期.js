import React, { Component } from 'react'

export default class App extends Component {
    //WARNING! To be deprecated in React v17. Use componentDidMount instead.
    UNSAFE_componentWillMount() {
        console.log('componentWillMount---1');
    }


    componentDidMount() {
        console.log('componentDidMount---3');
    }

    
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate---4');
        return true
    }

    UNSAFE_componentWillUpdate() {
        console.log('componentWillUpdate---5');
    }

    componentDidUpdate() {
        console.log('componentDidUpdate---8');
    }

//    static getDerivedStateFromProps() {
//         console.log('getDerivedStateFromProps');
//         return{}
//     }


    state = {
        name:'aaa'
    }

    render() {
        console.log('render---2---6');
        return (
            <div>
                <button onClick={() =>{
                    this.setState({name:'xxx'})
                }}>
                    click
                </button>
                <Child value={this.state.name}></Child>
            </div>
        )
    }
}

class Child extends Component {
    UNSAFE_componentWillReceiveProps() {
        console.log('componentWillReceiveProps---7');
    }
    render() {
        return (
            <div>
                child
            </div>
        )
    }
}