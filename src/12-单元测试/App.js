import React, { Component } from 'react'

export default class App extends Component {
    state = {
        text:'',
        list: ['111', '22', '33', '111', '22', '33', '111', '22']
    }

    myref = React.createRef()
    render() {
        return (
            <div>

                <h1>todo</h1>

                <input ref={this.myref} onChange={() => { this.setState({ text: this.myref.current.value }) }}></input>

                <button className="add" onClick={() => {
                    this.setState({
                        list: [...this.state.list, this.state.text]
                    })
                }}>add</button>

                <ul>
                    {
                        this.state.list.map((item, index) => (
                            <li key={index}>
                                {item}
                                <button className="del" onClick={() => {
                                    const newList = [...this.state.list]
                                    newList.splice(index, 1)
                                    this.setState({ list: newList })
                                }}>del</button>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}
