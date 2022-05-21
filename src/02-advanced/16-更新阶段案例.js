import React, { Component } from 'react';

class Box extends Component {

    // 应用场景
    shouldComponentUpdate(nextProps, nextState) {
        // 比较老的/新的current 和老的/新的index 是否相同
        // 只更新老的有改变的box 和新的有改变的box 其他box不改变
        // 默认current index他们两个是不同的
        // 上一次的有框的 说明current index是相等的 让他们进行更新 更新成不带框的
        // 然后下一次不带框的 current index相等的话，也要让他更新 
        if (this.props.current === this.props.index || nextProps.current === nextProps.index) {
            return true
        }
        // 其他的阻止render执行
        return false;
    }

    render() {
        console.log('Box render');
        // 每次父组件setState 循环的子组件全部都会更新
        const { current, index } = this.props

        return (
            <div style={{ boxSizing: 'border-box', margin: '10px', float: 'left', width: '100px', height: '100px', border: current === index ? '5px solid red' : 'unset', backgroundColor: 'yellow' }}>

            </div>
        );
    }
}

export default class App extends Component {
    state = {
        list: ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
        current: 0
    }
    render() {
        return (
            <div>
                <input type="number" value={this.state.current}
                    onChange={(evt) => {
                        this.setState({ current: +evt.target.value })
                    }} />
                <div style={{ overflow: 'hidden' }}>
                    {
                        this.state.list.map((item, index) => (
                            <Box current={this.state.current} index={index} key={index}></Box>
                        ))
                    }
                </div>
            </div>
        )
    }
}
