import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { Get_Register } from '../redux/actions/UserAction';
import "../css/register.css"

export const Register = () => {
  const { register, handleSubmit,reset , formState: { errors } } = useForm();
  const dispatch = useDispatch();
  const reg_user = JSON.parse(localStorage.getItem("users"))

  
  const onSubmit = data => {
    const a = reg_user?.filter((item)=>item.email == data.email)
    if (a && a?.length > 0){
      return (
        alert("This email is already exist")
      )
    }
    else{
      dispatch(Get_Register(data))
      reset();
    }
  }
 
  return (
    <div>
     <div className='register-border'>
      <h1>Registration form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input type="text" className='reg-input' placeholder='Enter UserName' {...register("username", { required: true, message: "username is required" })} /> <br />

          <input type='text' className='reg-input' placeholder='Enter Email' {...register("email", { required: "Email is Required", pattern: /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/ })} /> <br />
          <p style={{ color: "red", }}>{errors.email?.message}</p>
          <input type='number' className='reg-input' placeholder='Enter Phone_no' {...register("phone_no", { required: true })} /> <br />

          <input type='password' className='reg-input' placeholder='Enter Password' {...register("password", { required: true })} /> <br />

          <input type='text' className='reg-input' placeholder='Enter Role_type'{...register("role_type", { required: true })} /> <br />
          <input className='reg-submit' type="submit" value="Register" />
        </div>
      </form>
      </div>
    </div>
 
  );
}