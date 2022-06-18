import { call, put, takeEvery } from 'redux-saga/effects'
import axios from 'axios'

export default function* watchSaga() {
    yield takeEvery('get-cinemaList', getCinemaList)
}

function* getCinemaList() {
    const res = yield call(getCinemaListAction)

    yield put({
        type: "change-cinemaList",
        value: res.data.data.cinemas
    })
}

function getCinemaListAction() {

    // 直接返回promise
    return axios({
        url: 'https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=8851606',
        method: 'GET',
        headers: {
            'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"164864080277695958384641","bc":"110100"}',
            'X-Host': 'mall.film-ticket.cinema.list'
        }
    })
}