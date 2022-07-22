import { applyMiddleware, legacy_createStore, combineReducers, compose } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./saga";
import { UserReducer } from "./reducers/UserReducer";

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
   user : UserReducer
})
const store = legacy_createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
)
sagaMiddleware.run(rootSaga)

export default store;
