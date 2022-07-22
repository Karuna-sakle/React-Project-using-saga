import { GET_USER_REQUESTED, LOGIN_REQUESTED, LOGOUT_REQUESTED, REGISTER_REQUESTED } from "./types.js"

export const Get_Register =(data)=>{
    console.log("action", data)
    return{
        type : REGISTER_REQUESTED,
        payload : data
    }
}

export const Get_Users = () =>{
    return{
        type : GET_USER_REQUESTED,
    }
}

export const Get_Login =()=>{
    return{
        type : LOGIN_REQUESTED,
       
    }
}

export const Get_Logout =()=>{
    return{
        type : LOGOUT_REQUESTED
    }
}