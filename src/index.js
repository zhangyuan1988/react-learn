// console.log('hello');
// 17之后可以不引入
import React from "react";
import ReactDOM from "react-dom";
import "./utils/request";
// import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

// import './01-base/01-class-component'

// eslint-disable-next-line no-unused-vars
// import App from "./01-base/01-class-component";
// import AppFunctional from './01-base/02-fun-component'
// import App from './01-base/03-组件嵌套'
// import App from './01-base/04-组件样式'
// import App from './01-base/07-ref'
// import App from './01-base/08-state'
// import App from './01-base/09-循环渲染'
// import App from './01-base/10-todolist'
// import App from './01-base/12-卖座选项卡'
// import App from './01-base/13-setState同步异步'
// import App from './01-base/14-betterScroll'
// import App from './01-base/15-betterScrollCinema'
// import App from './01-base/16-props'
// import App from './01-base/17-props函数式组件'
// import App from './01-base/18-状态vs属性'
// import App from './01-base/19-非受控'
// import App from './01-base/20-受控组件'
// import App from './01-base/21-受控cinema'
// import App from './01-base/22-受控todoList'
// import App from "./02-advanced/01-字传父";
// import App from "./02-advanced/02-非受控卖座选项卡";
// import App from "./02-advanced/03-受控组件";
// import App from './02-advanced/04-父子通信表单域'
// import App from './02-advanced/05-ref表单域'
// import App from './02-advanced/06-中间人状态提升'
// import App from './02-advanced/07-发布订阅模式'
// import App from "./02-advanced/08-发布阅案例";
// import App from "./02-advanced/09-context";
// import App from "./02-advanced/10-插槽";
// import App from "./02-advanced/11-插槽抽屉";
// import App from './02-advanced/12-初始化生命周期'
import App from "./02-advanced/13-初始化案例";
// import App from './02-advanced/14-更新阶段生命周期1'
// import App from './02-advanced/15-更新阶段生命周期2'
// import App from './02-advanced/16-更新阶段案例'
// import App from './02-advanced/17-更新阶段3'
// import App from './02-advanced/18-更新阶段3案例'
// import App from './02-advanced/19-销毁'
// import App from './02-advanced/20-新声明周期1'
// import App from './02-advanced/21-新生命周期1-案例'
// import App from './02-advanced/生命周期'
// import App from './02-advanced/新生命周期'
// import App from './02-advanced/22-新生命周期2'
// import App from './02-advanced/23-新生命周期案例2'
// import App from './02-advanced/24-性能优化'
// import App from './02-advanced/25-swiper'
// import App from './02-advanced/26-swiper异步'
// import App from './02-advanced/27-swiper组件'
// import App from './03-hooks/01-useState'
// import App from './03-hooks/02-todolist'
// import App from './03-hooks/03-useEffect'
// import App from './03-hooks/04-useEffect2'
// import App from './03-hooks/05-useEffect3'
// import App from './03-hooks/06-useEffect4'
// import App from './03-hooks/07-useCallback1'
// import App from './03-hooks/08-useCallback2'
// import App from './03-hooks/09-useMemo'
// import App from './03-hooks/10-useRef'
// import App from './03-hooks/11-useRef-保存值'
// import App from './03-hooks/12-useContext'
// import App from './03-hooks/13-useReducer1'
// import App from './03-hooks/14-useReducer2'
// import App from './03-hooks/15-useReducer3'
// import App from './03-hooks/16-自定义hooks'
// import App from './04-router/App'
// import App from './05-redux/App'
// import App from './06-react-redux/App'
// import App from './07-antd/01-antd引入'
// import App from './07-antd/02-栅格'
// import App from './07-antd/03-layout'
// import App from './07-antd/04-下拉菜单'
// import App from './07-antd/05-步骤条'
// import App from './07-antd/06-轮播'
// import App from './07-antd/07-table'
// import App from './07-antd/08-树形控件'
// import App from './07-antd/09-Modal'
// import App from './08-antd-mobile/App'
// import App from './11-stype-components/App'
// import App from './12-单元测试/App'
// import App from './13-redux-saga/App'
// import App from './13-redux-saga/maizuo/App'
// import App from './14-react-补充/portal/App'
// import App from './14-react-补充/懒加载/App'
// import App from './14-react-补充/forwardRef/App'
// import App from './14-react-补充/forwardRef/App_forwardRef'
// import App from "./14-react-补充/memo/App";

// class App extends React.Component {
//   render() {
//     return (
//         <div id="app" style={{color: 'red'}}>
//         12345789
//         </div>
//     )
//   }
// }

// 引入react-redux
import { Provider } from "react-redux";

import { store, persistor } from "./08-antd-mobile/redux/store";

// 引入持久化工具
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.render(
  // 打开严格模式
  // <React.StrictMode>
  // 接收store
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  // </React.StrictMode>

  // <App/>
  document.getElementById("root")
);
