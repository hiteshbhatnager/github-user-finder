import React from "react";
import logo from './img/logo.png'

function Logo() {
    return (
        <>
            <div>
                <img src={logo} alt="logo" className="w-8 py-2" />
            </div>
        </>
    )
}

export default Logo