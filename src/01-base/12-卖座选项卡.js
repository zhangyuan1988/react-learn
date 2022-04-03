import React, { Component } from 'react'
import Film from './maizuocomponents/Film'
import Cinema from './maizuocomponents/Cinema'
import Owner from './maizuocomponents/Owner'
import './css/02-maizuo.css'

export default class App extends Component {
    state = {
        list: [
            { id: 1, text: '电影' },
            { id: 2, text: '影院' },
            { id: 3, text: '我的' },
        ],
        active: 0
    }

    changeActive(index) {
        this.setState({ active: index })

    }

    // 渲染函数
    which() {
        if (this.state.active === 0) {
            return <Film></Film>
        } else if (this.state.active === 1) {
            return <Cinema></Cinema>
        } else {
            return <Owner></Owner>
        }
    }

    render() {
        return (
            <>

                {
                    this.state.active === 0 && <Film></Film>
                }
                {
                    // this.state.active === 1 && <Cinema></Cinema>
                }
                {
                    this.state.active === 2 && <Owner></Owner>
                }


                {/* 直接写函数表达式 */}
                {
                    this.which()
                }


                <ul className="tab">
                    {
                        this.state.list.map((item, index) =>
                            <li onClick={() => {
                                this.changeActive(index)
                            }} className={index === this.state.active ? 'active' : ''} key={item.id}>
                                {item.text}
                            </li>
                        )
                    }
                </ul>
            </>
        )
    }
}
