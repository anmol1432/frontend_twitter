import React, { useState } from 'react'

const Input = ({ type, name, children }) => {
    console.log("children",children);
    const [active, setActive] = useState(false);
    function handleActivation(e) {
        setActive(!!e.target.value);
    }
    return (
        <div className="relative rounded my-3  text-white">
            <input
                className={[
                    "outline-none w-full rounded text-sm text-white transition-all duration-200 ease-in-out p-2 border-blue-500 border-r-2 border-2",
                    active ? "pt-6" : ""
                ].join(" ")}
                id={name}
                name={name}
                type={type}
                onChange={handleActivation}
                style={{ backgroundColor: 'black' }}
            />
            <label
                className={[
                    "absolute top-0 left-0 flex items-center p-2 text-blue-500  transition-all duration-200 ease-in-out",
                    active ? "text-xs" : "text-sm"
                ].join(" ")}
                htmlFor={name}
            >
                {children}
            </label>
        </div>

    )
}

export default Input
