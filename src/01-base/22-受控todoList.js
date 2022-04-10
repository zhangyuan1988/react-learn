import React, { Component } from 'react'
import './css/01-index.css'

export default class App extends Component {

    myref = React.createRef()

    state = {
        list: [
            { id: 1, text: '111', isChecked: false },
            { id: 2, text: '222', isChecked: false },
            { id: 3, text: '333', isChecked: false },
            { id: 4, text: '444', isChecked: false }
        ],
        mytext: ''
    }

    handleClick() {

        const obj = {
            id: Date.now(),
            text: this.state.mytext,
            isChecked: false
        }

        this.setState({
            list: [...this.state.list, obj],
            mytext: ''
        })

        // 清空数据
        // this.myref.current.value = ''
    }

    // 选中状态
    handleChecked(index) {
        console.log(index);
        // 复制新的在新的里操作
        const newList = [...this.state.list]
        newList[index].isChecked = !newList[index].isChecked
        this.setState({ list: newList })
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
                <input type="text" value={this.state.mytext} onChange={(evt) => {
                    this.setState({ mytext: evt.target.value })
                }}></input>
                <button onClick={() => this.handleClick()}>add</button>

                <ul>
                    {
                        //  this.state.list.map((item,index) => <li key={item.id}>{item.id}-{item.text}----<button onClick={
                        //     this.handleClickDelete.bind(this,item.id)
                        // }>删除</button></li>)

                        this.state.list.map((item, index) => <li key={item.id}>
                            {/* 富文本展示 */}
                            <input type="checkbox" checked={item.isChecked} onChange={() => {
                                this.handleChecked(index)
                            }} />
                            {item.id}-
                            <span dangerouslySetInnerHTML={
                                { __html: item.text }
                                // 删除线
                            } style={{ textDecoration: item.isChecked && 'line-through' }}></span>----
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
