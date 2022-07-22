import { put, takeEvery } from "redux-saga/effects"
import { ERROR, LOGIN_REQUESTED, LOGIN_SUCCESS, LOGOUT_REQUESTED, LOGOUT_SUCCESS } from "../actions/types"

function* fetchUser(action) {
    console.log(action.apyload)
    try {
        yield put({
            type: LOGIN_SUCCESS , payload : action.payload
        })
    }catch (e) {
        yield put({
            type: ERROR, payload : e.message
        })
    }
}

function* logoutUser(action) {
    console.log("loutuser", action)
    try {
       yield put({ type: LOGOUT_SUCCESS });
    } catch (e) {
       yield put({ type: ERROR, error: e.message });
    }
 }

function* UserLoginSaga() {
    yield takeEvery(LOGIN_REQUESTED, fetchUser);
    yield takeEvery(LOGOUT_REQUESTED, logoutUser);

};

export default UserLoginSaga;