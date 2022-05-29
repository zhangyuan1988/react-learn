
// 拆分reducer
const CinemaListReducer = (prevState = {
    list: []
    // ...
}, action = {}) => {
    // 一定不能直接修改
    const newState = { ...prevState }
    switch (action.type) {
        case "change-list":
            newState.list = action.value
            return newState
        default:
            return prevState
    }
}

export default CinemaListReducer