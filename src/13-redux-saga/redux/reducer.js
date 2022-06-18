function reducer(prevState = { list1: [], list2: [] }, action = {}) {
    const newState = { ...prevState }
    switch (action.type) {
        // case saga put的分支
        case 'change-list1':
            console.log(action);
            newState.list1 = action.payload
            return newState
        case 'change-list2':
            console.log(action);
            newState.list2 = action.payload
            return newState
        default:
            return prevState
    }
}

export default reducer