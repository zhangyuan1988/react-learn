
// 拆分reducer
const CityReducer = (prevState = {
    cityName: '北京'
    // ...
}, action = {}) => {
    // 一定不能直接修改
    const newState = { ...prevState }
    switch (action.type) {
        case "changeCity":
            newState.cityName = action.value
            return newState
        default:
            return prevState
    }
}

export default CityReducer