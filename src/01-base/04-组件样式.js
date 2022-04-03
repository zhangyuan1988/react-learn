

import React, { Component } from 'react';

// 引入css webpack 支持
import './css/01-index.css'

export default class App extends Component {
    render() {
        const name = 'fu'
        const objStyle = {
            backgroundColor: 'red',
            fontSize: '28px'
        }
        return (
            <div>
                {10 + 20}-{name}
                <br></br>
                {10 > 20 ? 'aa' : 'bb'}

                {/* style 后面是对象 {}语法 */}
                <div style={objStyle}>
                    111
                </div>

                {/* React推荐我们使用行内样式，因为React觉得每一个组件都是一个独立的整体 */}

                {/* css文件的使用 v16.2之前必须要用className */}
                {/* 建议使用className 使用class会报错 */}
                <div className='active'>
                    32223355
                </div>

                <div id="myapp">
                    66665555
                </div>


                {/* for 是js关键字  这里使用htmlFor */}
                <label htmlFor="username">用户名：</label>
                <input type="text" id="username">

                </input>
            </div>
        )
    }
}


// 函数式写法
// export default function App () {
//     const name = 'fu'
//     const objStyle = {
//         backgroundColor: 'red',
//         fontSize: '18px'
//     }
//     return (
//         <div>
//             {10 + 20}-{name}
//             <br></br>
//             {10 > 20 ? 'aa' : 'bb'}

//             {/* style 后面是对象 {}语法 */}
//             <div style={objStyle}>
//                 111
//             </div>
//         </div>
//     )
// }