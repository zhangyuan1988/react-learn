import { fromJS } from "immutable";

// 拆分reducer
const CityReducer = (prevState = {
    cityName: '北京'
    // ...
}, action = {}) => {
    // 一定不能直接修改
    const newState = fromJS(prevState)
    console.log(action);
    switch (action.type) {
        case "changeCity":
            // newState.cityName = action.value
            return newState.set('cityName', action.value)
        default:
            return prevState
    }
}

export default CityReducer