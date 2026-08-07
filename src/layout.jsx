import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Nav, Footer } from "./components";
import { useNavigate } from "react-router-dom";
import Home from "./pages/Home";

function Layout() {
    const [value, setValue] = useState("")

    return (
        <>
            <div className='w-full min-h-screen flex flex-col justify-between items-center bg-gray-500 text-white text-s overflow-y-scroll scrollbar-none'>
                <main className="flex-1 w-full">
                    <Nav value={value} setValue={setValue} />
                </main>
                <Outlet context={{ value, setValue }} />
                <Footer />
            </div>
        </>
    )
}

export default Layout