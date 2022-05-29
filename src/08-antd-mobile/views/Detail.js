import React, { useEffect } from 'react'
// import store from '../redux/store';
import { show, hide } from '../redux/actionCreator/TabbarActionCreator'

import { connect } from 'react-redux'

function Detail(props) {
    const { show, hide, match } = props
    console.log(props.match.params.id, '利用id 去取数据');
    useEffect(() => {

        console.log(props);
        console.log('created');

        // store.dispatch 通知
        // store.dispatch(hide())

        hide()

        return () => {
            // 离开时显示
            // store.dispatch(show())
            console.log('destroy');
            show()
        }
    }, [match.params.id, show, hide])
    return (
        <div>Detail

            {props.match.params.id}
        </div>
    )
}

// connect 第一个参数是给子组件传递的属性
// 第二个参数是给子组件传递的回调函数,返回值要是action

// 通常是这么写
const mapDispatchToProps = {
    show,
    hide
}
export default connect(null, mapDispatchToProps)(Detail)