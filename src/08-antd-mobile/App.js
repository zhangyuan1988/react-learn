import React, { Component } from 'react'
import MRouter from './router/indexRouter'
import Tabbar from './components/Tabbar'
import './views/css/app.css'
// import store from '../05-redux/redux/store'

import { connect } from 'react-redux'

class App extends Component {

  state = {
    show: true
  }

  // store.subscribe 订阅
  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <div>
        {/* // 其他内容 可以放layout */}
        <MRouter>
          {
            this.props.isShow && <Tabbar />
          }
        </MRouter>

      </div>
    )
  }
}

// 使用connect 包装组件 是一个函数 执行完后再进行函数调用
// connect 第一个参数是一个函数 必须有返回值 
// 被包装后 就是容器组件 ui显示组件
// 返回值是什么 app上就会有什么属性
// 有一个参数就是仓库，可以直接使用
// 这里相当于直接订阅，不需要在组件中订阅/取消订阅，可以在组件中直接使用

// 通常是这么写
const mapStateToProps = (state) => {
  console.log(state);
  return {
    a: 1,
    b: 1,
    isShow: state.TabbarReducer.show
  }
}
export default connect(mapStateToProps)(App)