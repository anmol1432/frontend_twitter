import React from 'react'
import { NavLink } from "react-router-dom";
const Error = () => {
  return (
    <>
      <div class="h-screen w-screen bg-blue-600 flex justify-center content-center flex-wrap">
        <p class="font-sans text-white error-text text-4xl">Page not found 🛑</p>
      </div>
      <div class="absolute w-screen bottom-0 mb-6 text-white text-center font-sans text-xl">
        <NavLink to="/">
          <span class="">Take me back to Home</span>
        </NavLink>
      </div>
    </>
  )
}

export default Error
