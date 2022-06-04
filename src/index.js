// console.log('hello');
// 17之后可以不引入
import React from 'react';
import ReactDOM from 'react-dom';

// import App from './09-immutable/01-base'
// import App from './09-immutable/02-map'
// import App from './09-immutable/03-map2'
// import App from './09-immutable/04-list'
// import App from './09-immutable/05-个人信息修改'
// import App from './09-immutable/06-个人信息修改2'
import App from './09-immutable/redux/App'


ReactDOM.render(
    // 打开严格模式
    // <React.StrictMode>
    <App />
    // </React.StrictMode>

    // <App/>
    ,
    document.getElementById('root')
)