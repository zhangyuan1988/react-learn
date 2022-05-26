// 1.引入redux
// 2.createStore(reducer)
import { applyMiddleware, combineReducers, createStore } from 'redux'
import CityReducer from './redusers/CityReducer'
import TabbarReducer from './redusers/TabbarReducer'
import CinemaListReducer from './redusers/CinemaListReducer'
import reduxThunk from 'redux-thunk'
import reduxPromise from 'redux-promise'
// redux 使用三大原则
/**
 * state 以单一对象存储在store中
 * sate只读（每次都返回一个新对象，所以每次都要复制一份）
 * 使用纯函数reducer执行state更新
 * 
 */

// 初始化时 prevState 是undefined
// const reducer = (prevState = {
//     show: true,
//     cityName: '北京'
//     // ...
// }, action = {}) => {
//     // 一定不能直接修改
//     const newState = { ...prevState }
//     console.log(action);
//     switch (action.type) {
//         case "hide-tabbar":
//             newState.show = false
//             return newState
//         case "show-tabbar":
//             newState.show = true
//             return newState
//         case "changeCity":
//             newState.cityName = action.value
//             return newState
//         default:
//             return prevState
//     }
// }

// 合并reducer
// 此时会有命名空间
const reducer = combineReducers({
    CityReducer,
    TabbarReducer,
    CinemaListReducer
})

// 第二个参数也支持写 默认的参数
// 第二个参数可以是中间件
// 同步状态下不受影响 ，异步状态下 会返回一个函数去执行

// 可以使用多个中间件
const store = createStore(reducer, applyMiddleware(reduxThunk, reduxPromise))


/**
 * store.dispatch
 * store.subscribe
 * store.getState
 */

// 原理
// function createFStore(reducer) {
//     var list = [];
//     // 定义状态 初始状态
//     var state = reducer(undefined, {})
//     // 订阅
//     // 接收回调函数放在任务队列中
//     function subscribe(callback) {
//         list.push(callback)
//     }

//     // 发布
//     function dispatch(action) {
//         // 每次发布执行reducer 传入接收的值
//         // 传入老的state 再重新覆盖state 
//         state = reducer(state, action)
//         for (var i in list) {
//             list[i] && list[i]()
//         }
//     }

//     // 仓库
//     function getState() {
//         return state
//     }


//     return {
//         subscribe, dispatch, getState
//     }
// }


export default store


/**
 * 
 * 
 * var obj = {
 *   myname = 'fz'
 * };
 * 
 * function test(obj2){
 * 
 *      var newObj = {...obj2}
 *      obj.myname = 'xiaoming'
 *      return obj
 * }
 * 
 * text(obj)
 * 
 * 纯函数：
 *  1.对外界没有副作用 不影响其他外部数据
 *  2.同样的输入 得到 同样的输出
 */