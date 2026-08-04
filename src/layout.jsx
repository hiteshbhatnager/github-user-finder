import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Nav, Footer } from "./components";

function Layout() {
    const [value, setValue] = useState("")

    return (
        <>
            <div className='w-full h-screen flex flex-col justify-between items-center bg-gray-500 text-white text-s overflow-y-scroll '>
                <Nav value={value} setValue={setValue} />
                <Outlet context={{ value, setValue }} />
                <Footer />
            </div>
        </>
    )
}

export default Layout