import React, { Component } from 'react'

export default class Tabbar extends Component {
    state = {
        list: [
            { id: 1, text: '电影' },
            { id: 2, text: '影院' },
            { id: 3, text: '我的' },
        ],
        current: this.props.defaultValue// 第一次显示没有问题 后续会有问题
    }

    changeActive(index) {
        this.setState({ current: index })
        // 通知父组件
        this.props.event(index)
    }
    render() {
        return (
            <div>
                <ul className="tab">
                    {
                        this.state.list.map((item, index) =>
                            <li onClick={() => {
                                this.changeActive(index)
                                // 使用父组件的current
                            }} className={index === this.state.current ? 'active' : ''} key={item.id}>
                                {item.text}
                            </li>
                        )
                    }
                </ul>
            </div>
        )
    }
}
