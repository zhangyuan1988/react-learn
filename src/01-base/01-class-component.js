// class Test{
//     constructor(){
//         this.a = 1
//     }

//     testa(){
//         console.log('testa');
//     }

//     testb(){

//     }
// }

// class TestChild extends Test{
//     testab(){
//         console.log('testb');
//     }}

// const obj = new TestChild();
// obj.testa()
// console.log(obj.a);

// 类组件
import React from "react";
class App extends React.Component {
    render() {
        return (
            <ul>
                <li>123</li>
                <li>123</li>
                <li>123</li>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a>11</a>
            </ul>
        )
    }
}

export default App