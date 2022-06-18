import { take, fork, call, put } from 'redux-saga/effects'

function* watchSaga2() {
    while (true) {
        // take函数 监听组件发来的action
        yield take('get-list2')
        // fork 同步执行异步处理函数
        // 非阻塞调用形式执行
        yield fork(getList2)
    }
}

function* getList2() {
    // 异步处理的

    // call函数发异步请求
    // 阻塞式调用fn 是一个promise对象
    const res1 = yield call(getListAction2_1/* 返回值是 promise对象函数 */)

    // 第一个参数是异步 第二个是传递的参数
    const res2 = yield call(getListAction2_2, res1/* 返回值是 promise对象函数 */)

    // put 函数发出新的action 非阻塞式的 reducer
    yield put({
        type: "change-list2",
        payload: res2
    })
}

function getListAction2_1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(['aa', 'bb', 'cc', 'dd', 'ee'])
        }, 2000)
    })
}

// 通过函数接收 是传递来的原始对象
function getListAction2_2(data) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([...data, '1', '2'])
        }, 2000)
    })
}

export default watchSaga2

export {
    getList2
}