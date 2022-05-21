import React,{useEffect} from 'react'

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

        // store.dispatch 通知
        return()=>{
            console.log('destroy');
        }
    },[])
    return (
        <div>Detail

            {/* {props.match.params.id} */}
        </div>
    )
}
