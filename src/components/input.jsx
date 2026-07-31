import React from "react";
import { FiSearch } from "react-icons/fi";

function Input() {
    return (
        <>
            <div className="flex items-center border rounded-lg px-3 py-1">
                <FiSearch className="text-gray-500" />
                <input
                    type="text"
                    placeholder="Search GitHub username..."
                    className="ml-2 w-full outline-none"
                />
            </div>
        </>
    )
}

export default Input