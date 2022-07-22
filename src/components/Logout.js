import React, { useEffect } from 'react'

export const Logout = () => {

  useEffect(()=>{
    localStorage.removeItem("auth-user")
    window.location.href = "/"
  })
  return (
   <>
   </>
  )
}
