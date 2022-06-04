import React, { Component } from 'react'
import { fromJS, setIn } from 'immutable'

export default class App extends Component {
    state = {
        info: fromJS({
            name: 'fz',
            location: {
                province: '北京',
                city: '朝阳'
            },
            favorites: ['读书', '看报']
        })
    }

    componentDidMount() {
        console.log(this.state.info);
    }

    render() {
        return (
            <div>
                <h1>个人信息</h1>
                <button onClick={() => {
                    this.setState({
                        // 非常麻烦
                        info: this.state.info.setIn(['name'], 'xiaoming')
                            // 数组中是数据的键名
                            .setIn(['location', 'city'], 'zzzzzzzzzzz')

                    })
                }}>修改</button>
                <div>
                    {this.state.info.get('name')}
                    <br />
                    {this.state.info.get('location').get('province')}---
                    {this.state.info.get('location').get('city')}

                    <br />
                    {this.state.info.get('favorites').map((item, index) => (
                        <li key={index}>
                            {item}
                            <button onClick={() => {
                                // this.setState({
                                //     info: this.state.info
                                //         // 数组中是数据的键名和索引
                                //         .setIn(['favorites', index], '21111')
                                // })
                                this.setState({
                                    info: this.state.info
                                        // 数组中是数据的键名, 第二个参数是回调函数，接收list行参，在回调函数中操作
                                        .update('favorites', (list)=>list.splice(index,1))
                                        // .updateIn(['favorites'], (list)=>list.splice(index,1))
                                })
                            }}>del</button>
                        </li>
                    ))}
                </div>
            </div>
        )
    }
}
