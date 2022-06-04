import { fromJS } from 'immutable';

const TabbarReducer = (prevState = fromJS({
    show: true
    // ...
}), action = {}) => {
    // 一定不能直接修改
    // const newState = { ...prevState }
    console.log(action);
    switch (action.type) {
        case "hide-tabbar":
            // newState.show = false
            return prevState.set('show', false)
        case "show-tabbar":
            // newState.show = true
            return prevState.set('show', true)
        default:
            return prevState
    }
}

export default TabbarReducer