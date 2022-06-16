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
// import App from './09-immutable/redux/App'
// import App from './10-mobx/App'
import App from './10-mobx/04-router/App'

import store from './10-mobx/04-router/mobx/store'
import { Provider } from 'mobx-react'


ReactDOM.render(
    // 打开严格模式
    // <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
    // </React.StrictMode>

    // <App/>
    ,
    document.getElementById('root')
)