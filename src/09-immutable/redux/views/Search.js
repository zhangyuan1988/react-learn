import React, { useEffect, useState, useMemo } from 'react'
import store from '../redux/store';
import getCinemaListAction from '../redux/actionCreator/getCinemaListAction'

export default function Search() {
    // 访问命名空间的reducer
    const [cinemaList, setcinemaList] = useState(store.getState().CinemaListReducer.list);
    const [mytext, setmytext] = useState('');
    useEffect(() => {

        if (store.getState().CinemaListReducer.list.length === 0) {
            // 去后台取数据
            // acttionCreator 里写异步
            // dispatch 只接收对象 如果有异步 需要中间件
            store.dispatch(getCinemaListAction())
        } else {
            // 缓存
            console.log('缓存');
        }


        const unsubscribe = store.subscribe(() => {
            console.log('cinema 订阅', store.getState().CinemaListReducer.list);
            setcinemaList(store.getState().CinemaListReducer.list)
        })


        // 销毁时 需要取消订阅，否则每次都会重复订阅
        return () => {
            // 取消订阅
            unsubscribe()
        };
    }, []);

    const getCinemaList = useMemo(() => (
        cinemaList.filter(item => {
            return item.name.toUpperCase().includes(mytext) || item.address.toUpperCase().includes(mytext)
        })
    ), [mytext, cinemaList])

    return (
        <div>

            <div>
                <input type="text" value={mytext} onChange={
                    (event) => {
                        setmytext(event.target.value)
                    }
                }></input>
            </div>

            {getCinemaList.map((item) =>
                <dl key={item.cinemaId} style={{ padding: '10px' }}>
                    <dt>
                        {item.name}
                    </dt>
                    <dd style={{ color: 'gray', fontSize: '12px' }}>
                        {item.address}
                    </dd>
                </dl>
            )}
        </div>
    )
}
