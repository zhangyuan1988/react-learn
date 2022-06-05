import React, { useEffect, useState } from 'react'
import store from '../mobx/store'
import { autorun } from 'mobx'
import { Observer } from 'mobx-react'

export default function Cinemas(props) {
  // 访问命名空间的reducer
  // const [cityName] = useState('');
  // const [cinemaList, setcinemaList] = useState(store.list);

  useEffect(() => {

    if (store.list.length === 0) {
      store.getList()
    }

    // 返回值时回调函数
    // const unsubscribe = autorun(() => {
    //   // 此时会执行多次
    //   // 需要取消订阅
    //   console.log(store.list,store.isTabbarShow);
    //   setcinemaList(store.list)
    // })

    // 销毁时 需要取消订阅，否则每次都会重复订阅
    return () => {
      // 取消订阅
      // unsubscribe()
    };
  }, []);

  return (
    <div>
      {/* 函数式写法 提供一个Observer帮助观察store中值的变化 */}
      <Observer>
        {
          () => {
            // 去store中引入数据
            return store.list.map((item) =>
              <dl key={item.cinemaId} style={{ padding: '10px' }}>
                <dt>
                  {item.name}
                </dt>
                <dd style={{ color: 'gray', fontSize: '12px' }}>
                  {item.address}
                </dd>
              </dl>
            )
          }
        }
      </Observer>

    </div>
  )
}
