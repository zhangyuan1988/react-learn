import { take, fork, call, put ,takeEvery} from 'redux-saga/effects'

function* watchSaga1() {
    // while (true) {
    //     // take函数 监听组件发来的action
    //     yield take('get-list1')
    //     // fork 同步执行异步处理函数
    //     // 非阻塞调用形式执行
    //     yield fork(getList1)
    // }

    // 简写方式
    yield takeEvery('get-list1', getList1)
}

function* getList1() {
    // 异步处理的

    // call函数发异步请求
    // 阻塞式调用fn
    const res = yield call(getListAction1/* 返回值是 promise对象函数 */)

    // put 函数发出新的action 非阻塞式的
    yield put({
        type: "change-list1",
        payload: res
    })
}

function getListAction1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(['111', '22', '33', '111', '22', '33', '111', '22'])
        }, 2000)
    })
}

export default watchSaga1

export {
    getList1
}