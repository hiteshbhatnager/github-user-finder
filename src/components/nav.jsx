import React, { useState } from "react";
import { Logo, Input } from "./index"
import { useNavigate } from "react-router-dom"

function Nav({ value, setValue }) {
    const navigate = useNavigate()

    const searchFun = (e) => {
        setValue(e.target.value)
    }

    return (
        <>
            <nav className='w-full h-15 py-1 px-2 flex justify-between items-center bg-black'>
                <div className='w-half mx-8 flex items-center'>
                    <div className='m-4'>
                        <Logo />
                    </div>
                    <h1 className='text-bold text-lg'>github user finder</h1>
                </div>
                <div className='mx-8 w-[60%]'>
                    <Input onChange={searchFun} value={value} />
                </div>
                <button
                    onClick={() => navigate(-1)}
                    className="bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-700"
                >
                    ← Back
                </button>
            </nav>
        </>
    )
}

export default Nav