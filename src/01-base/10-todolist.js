import React, { Component } from 'react'
import './css/01-index.css'

export default class App extends Component {

    myref = React.createRef()

    state = {
        list: [
            { id: 1, text: '111' },
            { id: 2, text: '222' },
            { id: 3, text: '333' },
            { id: 4, text: '444' }
        ]
    }

    handleClick() {
        if (this.myref.current.value) {

            console.log(this.myref);
            const obj = {
                id: Date.now(),
                text: this.myref.current.value
            }

            this.setState({
                list: [...this.state.list, obj]
            })

            // 清空数据
            this.myref.current.value = ''

        } else {
            alert('没有数据')
        }
    }

    handleClickDelete(id, i) {

        const index = this.state.list.findIndex(item => item.id === id)
        const newList = [...this.state.list]
        newList.splice(index, 1)
        this.setState({
            list: newList
        })
    }

    render() {
        return (
            <>
                <input type="text" ref={this.myref}></input>
                <button onClick={() => this.handleClick()}>add</button>

                <ul>
                    {
                        //  this.state.list.map((item,index) => <li key={item.id}>{item.id}-{item.text}----<button onClick={
                        //     this.handleClickDelete.bind(this,item.id)
                        // }>删除</button></li>)

                        this.state.list.map((item, index) => <li key={item.id}>{item.id}-
                            {/* 富文本展示 */}
                            <span dangerouslySetInnerHTML={
                                { __html:item.text}
                            }></span>----
                            <button onClick={() => {
                                this.handleClickDelete(item.id, index)
                            }}>删除</button>

                        </li>)
                    }
                </ul>
                {/* 控制是否挂载dom */}
                {
                    this.state.list.length > 0 ? null : <div>暂无代办事项</div>
                }

                {
                    this.state.list.length === 0 && <div>暂无代办事项</div>
                }

                {/* 控制显示隐藏 */}

                <div className={this.state.list.length === 0 ? '' : 'hidden'}>暂无代办事项</div>
            </>
        )
    }
}
