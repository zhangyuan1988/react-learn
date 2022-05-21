import React, { useEffect } from 'react'
import store from '../redux/store';
import { show, hide } from '../redux/actionCreator/TabbarActionCreator'

export default function Detail(props) {
    useEffect(() => {
        console.log('created');

        // store.dispatch 通知
        store.dispatch(hide())

        return () => {
            // 离开时显示
            store.dispatch(show())
            console.log('destroy');
        }
    }, [])
    return (
        <div>Detail

            {/* {props.match.params.id} */}
        </div>
    )
}
