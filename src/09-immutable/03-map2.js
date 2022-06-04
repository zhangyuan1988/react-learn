import React, { Component } from 'react'
import { Map } from 'immutable'
// map只能包一层

export default class App extends Component {
    state = {
        info: Map(
            {
                name: 'fz',
                select: 'aa',
                filter: Map({
                    text: '',
                    up: true,
                    down: false
                })
            }
        )
    }

    componentDidMount() {
        console.log(this.state.info);
    }
    render() {
        return (
            <div>
                <button onClick={() => {
                    this.setState({
                        info: this.state.info.set("name", 'xiaoming')
                    })
                }}>click</button>
                <button onClick={() => {
                    this.setState({
                        info: this.state.info.set('filter',this.state.info.get('filter').set('text', '11111'))
                    })
                }}>click2</button>
                {this.state.info.get('name')}

                <Child filter={this.state.info.get('filter')} />
            </div>
        )
    }
}


class Child extends Component {

    // 对比
    shouldComponentUpdate(nextProps, nextState) {
        // 是否走更新
        if (this.props.filter === nextProps.filter) {
            return false
        }
        return true
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    render() {
        return (
            <div>
                {this.props.filter.get('text')}
            </div>
        )
    }

}

