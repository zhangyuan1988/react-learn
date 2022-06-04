import React, { useEffect, useState } from 'react'
import store from '../redux/store'
import getCinemaListAction from '../redux/actionCreator/getCinemaListAction'

export default function Cinemas(props) {
  // 访问命名空间的reducer
  const [cityName] = useState(store.getState().CityReducer.cityName);
  const [cinemaList, setcinemaList] = useState(store.getState().CinemaListReducer.list);

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

  return (
    <div>
      <div style={{ overflow: 'hidden' }}>
        <div style={{ float: 'left' }} onClick={() => {
          props.history.push('/city')
        }}>
          {
            cityName
          }
        </div>
        <div style={{ float: 'right' }} onClick={() => {
          props.history.push('/cinemas/search')
        }}>
          搜索
        </div>
      </div>
      {cinemaList.map((item) =>
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
