import React from "react";
import logo from './img/logo.png'
import { useNavigate } from "react-router-dom";

function Logo() {
    const navigate = useNavigate()

    return (
        <>
            <div onClick={() => navigate('/')} >
                <div className='w-half mx-8 flex items-center'>
                    <div className='m-4'>
                        <img src={logo} alt="logo" className="w-8 py-2" />
                    </div>
                    <h1 className='text-bold text-lg'>github user finder</h1>
                </div>
            </div>
        </>
    )
}

export default Logo