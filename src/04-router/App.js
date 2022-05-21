import React, { Component } from 'react'
import MRouter from './router/indexRouter'
import Tabbar from './components/Tabbar'
import './views/css/app.css'

export default class App extends Component {

  // store.subscribe 订阅
  render() {
    return (
      <div>
        {/* // 其他内容 可以放layout */}
        <MRouter>
          <Tabbar />
        </MRouter>

      </div>
    )
  }
}
