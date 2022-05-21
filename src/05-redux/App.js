import React, { Component } from 'react'
import MRouter from './router/indexRouter'
import Tabbar from './components/Tabbar'
import './views/css/app.css'
import store from '../05-redux/redux/store'

export default class App extends Component {

  state = {
    show: store.getState().show
  }

  // store.subscribe 订阅
  componentDidMount() {
    store.subscribe(() => {
      console.log('app 中订阅');
      const { show } = store.getState()
      this.setState({ show })
      // 通过方法获取内部参数
      console.log(store.getState());
    })
  }

  render() {
    return (
      <div>
        {/* // 其他内容 可以放layout */}
        <MRouter>
          {
            this.state.show && <Tabbar />
          }
        </MRouter>

      </div>
    )
  }
}
