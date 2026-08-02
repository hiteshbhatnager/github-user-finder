import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";



function Input({
    value = "",
    className = "",
    type = "text",
    onChange
}) {

    return (
        <>
            <div className={`flex items-center border rounded-lg px-3 py-1 ${className}`}>
                <FiSearch className="text-gray-500" />
                <input
                    type={type}
                    placeholder="Search GitHub username..."
                    className="ml-2 w-full outline-none"
                    value={value}
                    onChange={onChange}
                />
            </div>
        </>
    )
}

export default Input