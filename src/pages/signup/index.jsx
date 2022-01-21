import React, { useState, useEffect } from 'react'
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux'
import Input from "../../components/Input/index";
import { signUp } from "../../store/action/authentication";
import "./index.css"


const Signup = ({ dispatch, signup }) => {
    const [fromValue, setfromValue] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: ''
    })
    // useEffect(() => {
    //     console.log(fromValue);
    // }, [fromValue])

    const handleSubmit = () => {
        dispatch(signUp(fromValue))
    };

    const handleInput = (e) => {
        let eventValue = e.target.value
        let eventName = e.target.name
        console.log({ [eventName]: eventValue });
        setfromValue({ ...fromValue, [eventName]: eventValue })
    };

    return (
        <>
            <div className="block mx-auto " id="login">
                <div className="flex flex-col justify-center item-center pt-6 lg:w-4/12 lg:mx-auto md:w-6/12  md:mx-auto ">
                    <div className="mx-7">
                        <NavLink to="/">
                            <svg viewBox="0 0 24 24" className="w-auto my-2  lg:h-16 h-12  " fill="currentColor">
                                <path className="text-white" d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49
                        2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658
                        2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63
                        2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257
                        1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313
                        3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376
                        0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0
                        13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z">
                                </path>
                            </svg>
                        </NavLink>
                        <h1 className="text-white font-extrabold my-2 tracking-wide text-2xl">
                            Sign In to twitter
                        </h1>
                    </div>
                    <div className="w-10/12 mx-auto">
                        <form onSubmit={(e) => e.preventDefault()} className="flex flex-col" >
                            <Input name={"name"} type={"text"} className="mb-2" children={"User Name"} handleInput={handleInput} />
                            <Input name={"email"} type={"email"} className="mb-2" children={"Email"} handleInput={handleInput} />
                            <Input name={"phone"} type={"tel"} className="mb-2" children={"Phone number"} handleInput={handleInput} />
                            <Input name={"password"} type={"password"} className="mb-2" children={"Password"} handleInput={handleInput} />
                            <Input name={"confirmPassword"} type={"password"} className="mb-2" children={"Confirm Password"} handleInput={handleInput} />
                            <button type="submit"
                                onClick={handleSubmit}
                                shape="round" size="large"
                                className="button bg-blue-500 rounded-full font-medium text-white py-3 my-3">
                                Sign up
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}


// Map Redux state to React component props
const mapStateToProps = (state) => ({
    signup: state.auth.signup,
})

// Connect Redux to React
export default connect(mapStateToProps)(Signup);

