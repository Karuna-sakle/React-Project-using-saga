import { put, takeEvery } from "redux-saga/effects"
import { ERROR, GET_USERS, GET_USER_REQUESTED, REGISTER_REQUESTED, REGISTER_SUCCESS } from "../actions/types"

function* fetchUser(action) {
    console.log("fetchuser", action)
    try {
        yield put({
            type: REGISTER_SUCCESS , payload: action.payload

        })

    }catch (e) {
        yield put({
            type: ERROR, payload : e.message
        })
    }
}
function* getUsers(action) {
    console.log("fetchuser", action)
    try {
        yield put({
            type: GET_USERS 
        })

    }catch (e) {
        yield put({
            type: ERROR, payload : e.message
        })
    }
}

function* UserRegisterSaga() {
    yield takeEvery(REGISTER_REQUESTED, fetchUser);
    yield takeEvery(GET_USER_REQUESTED, getUsers);

};

export default UserRegisterSaga;