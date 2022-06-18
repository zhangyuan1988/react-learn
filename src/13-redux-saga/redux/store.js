import { createStore, applyMiddleware } from "redux";

import createSagaMiddleware from "redux-saga"
import reducer from "./reducer"

// import watchSaga from "./saga"
import watchSaga from "./saga-every"

const SagaMiddleware = createSagaMiddleware()
const store = createStore(reducer,applyMiddleware(SagaMiddleware))

SagaMiddleware.run(watchSaga) // saga任务

export default store