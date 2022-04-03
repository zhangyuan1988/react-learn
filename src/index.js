// console.log('hello');
// 17之后可以不引入
import React from 'react';
import ReactDOM from 'react-dom';
// import './01-base/01-class-component'


// eslint-disable-next-line no-unused-vars
// import App from './01-base/01-class-component'
// import AppFunctional from './01-base/02-fun-component'
// import App from './01-base/03-组件嵌套'
// import App from './01-base/04-组件样式'
// import App from './01-base/07-ref'
// import App from './01-base/08-state'
// import App from './01-base/09-循环渲染'
// import App from './01-base/10-todolist'
// import App from './01-base/12-卖座选项卡'
// import App from './01-base/13-setState同步异步'
// import App from './01-base/14-betterScroll'
// import App from './01-base/15-betterScrollCinema'
// import App from './01-base/16-props'
// import App from './01-base/17-props函数式组件'
import App from './01-base/18-状态vs属性'









// class App extends React.Component {
//   render() {
//     return (
//         <div id="app" style={{color: 'red'}}>
//         12345789
//         </div>
//     )
//   }
// }


ReactDOM.render(
    // 打开严格模式
    <React.StrictMode>
        <App />
    </React.StrictMode>
    ,
    document.getElementById('root')
)