
// 拆分reducer
const CinemaListReducer = (prevState = {
    list: []
    // ...
}, action = {}) => {
    // 一定不能直接修改
    const newState = { ...prevState }
    console.log(action);
    switch (action.type) {
        case "change-list":
            newState.list = action.value
            return newState
        case "change-cinemaList":
            newState.list = action.value
            return newState
        default:
            return prevState
    }
}

export default CinemaListReducer