import React, { useEffect, useState } from 'react'
import store from '../redux/store'
import { connect } from 'react-redux';
import getCinemaListAction from '../redux/actionCreator/getCinemaListAction'

function Cinemas(props) {
  // 访问命名空间的reducer
  // const [cityName] = useState(store.getState().CityReducer.cityName);
  // const [cinemaList, setcinemaList] = useState(store.getState().CinemaListReducer.list);
  const { list, getCinemaList } = props
  useEffect(() => {

    if (list.length === 0) {
      // 去后台取数据
      // acttionCreator 里写异步
      // dispatch 只接收对象 如果有异步 需要中间件
      // store.dispatch(getCinemaListAction())
      getCinemaList()
    } else {
      // 缓存
      console.log('缓存');
    }
  }, [list, getCinemaList]);

  return (
    <div>
      <div style={{ overflow: 'hidden' }}>
        <div style={{ float: 'left' }} onClick={() => {
          props.history.push('/city')
        }}>
          {
            props.cityName
          }
        </div>
        <div style={{ float: 'right' }} onClick={() => {
          props.history.push('/cinemas/search')
        }}>
          搜索
        </div>
      </div>
      {props.list.map((item) =>
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

const mapStateToProps = (state) => {
  return {
    list: state.CinemaListReducer.list,
    cityName: state.CityReducer.cityName
  }
}

const mapDispatchToProps = {
  // 异步的写法
  async getCinemaList() {
    return await getCinemaListAction()
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cinemas)
