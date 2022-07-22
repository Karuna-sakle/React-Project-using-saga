import { all } from "redux-saga/effects";
import UserLoginSaga from "./UserLogin";
import UserRegisterSaga from "./UserRegistration";

export default function* rootSaga(){
    yield all ([
        UserRegisterSaga(),
        UserLoginSaga()
    ])
 }
