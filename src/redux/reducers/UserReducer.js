import { ERROR, LOGIN_SUCCESS, REGISTER_SUCCESS, GET_USERS } from "../actions/types";

const initialState = {
    users:[],
    error :""
}

export const UserReducer = (state= initialState, action) => {
    console.log(678,action)
    switch(action.type){
        case GET_USERS:
            return{
                ...state,
                users : state.users
            }
        case REGISTER_SUCCESS:
            const userInfo = state.users.concat(action.payload)
            localStorage.setItem("users",JSON.stringify(userInfo))
           
           return{
                ...state, 
                users : state.users.concat(action.payload)
            }
        case LOGIN_SUCCESS:
            localStorage.setItem("auth-user",JSON.stringify(action.payload))
            return{
                ...state,
                users : action.payload
            }
        case ERROR:
            return{
                error : action.payload
            }
        default:
            return state
        
    }
  
}
