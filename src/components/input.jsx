import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";



function Input() {
    const [input, setInput] = useState('')

    return (
        <>
            <div className="flex items-center border rounded-lg px-3 py-1">
                <FiSearch className="text-gray-500" />
                <input
                    type="text"
                    placeholder="Search GitHub username..."
                    className="ml-2 w-full outline-none"
                    value={input}
                    onChange={
                        (e) => {
                            setInput(e.target.vlaue)
                            console.log(input)
                        }
                    }
                />
            </div>
        </>
    )
}

export default Input