// 1.引入redux
// 2.createStore(reducer)
import { createStore } from 'redux'

// 初始化时 prevState 是undefined
const reducer = (prevState = {
    show: true
    // ...
}, action) => {
    // 一定不能直接修改
    const newState = { ...prevState}
    console.log(action);
    switch (action.type) {
        case "hide-tabbar":
            newState.show = false
            return newState
        case "show-tabbar":
            newState.show = true
            return newState
        default:
            return prevState
    }
}

// 第二个参数也支持写 默认的参数    
const store = createStore(reducer)

export default store