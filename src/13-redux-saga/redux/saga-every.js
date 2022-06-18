import { all, takeEvery } from 'redux-saga/effects'

import watchSaga1, { getList1 } from "./saga/saga1"
import watchSaga2, { getList2 } from "./saga/saga2"

function* watchSaga() {
    // 合并saga
    // yield all([watchSaga1(), watchSaga2()])

    // 简写方式
    yield takeEvery('get-list1', getList1)
    yield takeEvery('get-list2', getList2)
}

export default watchSaga