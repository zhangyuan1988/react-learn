import React,{useEffect} from 'react'
import store from '../mobx/store';


export default function Detail(props) {
    console.log(props);

    // 通过props.match 获取到动态参数
    // console.log(props.location.match.params);
    // 通过location获取到query参数
    // console.log(props.location.query);
    // 通过location获取到state参数
    // console.log(props.location.state);

    useEffect(() => {
        console.log('created');

        // store.isTabbarShow = false
        store.changeHide()

        // store.dispatch 通知
        return()=>{
            console.log('destroy');
            // store.isTabbarShow = true
            store.changeShow()
        }
    },[])
    return (
        <div>Detail

            {/* {props.match.params.id} */}
        </div>
    )
}
