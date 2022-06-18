import React from 'react'
// import './01-生成器'
import './02-可执行生成器'

import store from './redux/store'

export default function App() {
    return (
        <div>

            <button onClick={() => {
                if (store.getState().list1.length === 0) {
                    console.log('dispatch');
                    // dispatch
                    store.dispatch({type: 'get-list1'})
                } else {
                    console.log('缓存1', store.getState().list1);
                }
            }}>
                取异步缓存1
            </button>

            <button onClick={() => {
                if (store.getState().list2.length === 0) {
                    console.log('dispatch');
                    // dispatch
                    store.dispatch({type: 'get-list2'})
                } else {
                    console.log('缓存2', store.getState().list2);
                }
            }}>
                取异步缓存2
            </button>
        </div>
    )
}
