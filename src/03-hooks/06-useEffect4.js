import React, { Component, useEffect, useLayoutEffect } from 'react';

export default class App extends Component {

    state = {
        isChecked: true
    }
    render() {
        return (
            <div>
                <button onClick={() => {
                    this.setState({ isChecked: !this.state.isChecked })
                }}>click</button>
                {
                    this.state.isChecked && <Child></Child>
                }
            </div>
        )
    }
}

function Child() {
    // 模拟销毁阶段
    // 可以使用多次
    // 与useLayoutEffect(同步执行副作用)的区别 调用时机不同 
    /*
        useLayoutEffect 和原来 componentDidMount & componentDidUpdate 一致，在
        react完成DOM更新后马上同步调用的代码，会阻塞页面渲染。而 useEffect 是会在整个页面渲染完才会调用的
        代码
    */
    /**
     * 实际使用时如果想避免页面抖动（在 useEffect 里修改DOM很有可能出现）的话，可以把需要操作DOM的代码
        放在 useLayoutEffect 里。在这里做点dom操作，这些dom修改会和 react 做出的更改一起被一次性渲染到屏幕
        上，只有一次回流、重绘的代价。
     */
    useEffect(() => {
        window.onresize = (res) => {
            console.log(res.type);
        }
        // 定时器可以挂在this上 不需要声明状态
        const timer = setInterval(() => {
            console.log(1);
        }, 1000)

        // 内部返回函数 有依赖会在组件更新和销毁时执行 依赖数组为空时仅在销毁时执行
        return () => {
            console.log('组件销毁');
            clearInterval(timer)
            window.onresize = null
        }


    }, []);

    useLayoutEffect(() => {

    }, [])


    return (
        <div>
            child--
        </div>
    )
}