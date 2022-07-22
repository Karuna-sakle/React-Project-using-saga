import React, { useEffect } from 'react'
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { Get_Login } from '../redux/actions/UserAction';

export const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  const reg_user = JSON.parse(localStorage.getItem("users"))
  console.log(reg_user)
 

  const onSubmit = data =>{
    //{data.Reducers.getPost.filter((item) => item.userId === posts.id).map((item) => <p>{item.id}</p>)}
    const a = reg_user.filter((item)=>item.email== data.email && item.password == data.password)
    if (a.length != 0){
      return dispatch(Get_Login(data))
    }
    else{
      return alert("Email or Password is Invalid")
    }
  }

  useEffect(()=>{
    const user = localStorage.getItem("auth-user")
    if(user && user.length !=0){
      return window.location.href = "/dashboard"
    }
  })

  return ( 
    <div className='login-border'>
    <h2 style={{padding:"10px"}}>Login Form</h2>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
      <input type='email' className='login-input' placeholder='Enter Email' {...register("email", { required: true })} />
      {errors.email && <p style={{color:"red"}}>Email is required</p>}
      <br />
      <input type='password' className='login-input' placeholder='Enter Password' {...register("password", { required: true })} />
      {errors.password && <p style={{color:"red"}}>Password is required</p>}
      <br />
      <input type="submit" />
      </div>
    </form>
    </div>
  );
}