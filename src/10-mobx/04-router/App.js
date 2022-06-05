import React, { Component } from 'react'
import MRouter from './router/indexRouter'
import Tabbar from './components/Tabbar'
import './views/css/app.css'
import { inject, observer } from 'mobx-react'
import store from './mobx/store'

// 构建一个父组件-高阶组件mobx-react
// 注入一个store 名字是外部provider命名的
// 再使用observer高阶组件 包装组件
@inject('store')
@observer
class App extends Component {
  // state = {
  //   isShow: false
  // }

  // store.subscribe 订阅

  componentDidMount() {
    console.log(this.props);
    // autorun(() => {
    //   console.log(store.isTabbarShow);

    //   this.setState({ isShow: store.isTabbarShow })
    // })
  }
  render() {
    return (
      <div>
        {/* // 其他内容 可以放layout */}
        <MRouter>
          {/* 使用store中的数据来控制 */}
          {this.props.store.isTabbarShow && <Tabbar />}
        </MRouter>

      </div>
    )
  }
}

export default App