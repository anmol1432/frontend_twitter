import React from 'react'
import { NavLink } from "react-router-dom";
const Error = () => {
  return (
    <>
      <div className="h-screen w-screen bg-blue-600 flex justify-center content-center flex-wrap">
        <p className="font-sans text-white error-text text-4xl">Page not found 🛑</p>
      </div>
      <div className="absolute w-screen bottom-0 mb-6 text-white text-center font-sans text-xl">
        <NavLink to="/">
          <span className="">Take me back to Home</span>
        </NavLink>
      </div>
    </>
  )
}

export default Error
