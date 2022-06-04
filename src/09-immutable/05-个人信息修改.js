import React, { Component } from 'react'
import { Map, List } from 'immutable'

export default class App extends Component {
    state = {
        info: Map({
            name: 'fz',
            location: Map({
                province: '北京',
                city: '朝阳'
            }),
            favorites: List(['读书', '看报'])
        })
    }
    render() {
        return (
            <div>
                <h1>个人信息</h1>
                <button onClick={() => {
                    this.setState({
                        // 非常麻烦
                        info: this.state.info.set('name', 'xiaoming')
                            .set('location',this.state.info.get('location').set('city','东城'))
                    })
                }}>修改</button>
                <div>
                    {this.state.info.get('name')}
                    <br />
                    {this.state.info.get('location').get('province')}---
                    {this.state.info.get('location').get('city')}

                    <br />
                    {this.state.info.get('favorites').map((item,index) => (
                        <li key={item}>
                            {item}
                            <button onClick={() => {
                                this.setState({
                                    info:this.state.info
                                        .set('favorites',this.state.info.get('favorites').splice(index,1))
                                })
                            }}>del</button>
                        </li>
                    ))}
                </div>
            </div>
        )
    }
}
