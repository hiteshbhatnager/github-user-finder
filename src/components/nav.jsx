import React from "react";
import { Logo, Input } from "./index"

function Nav({ value, setValue }) {

    const [value, setValue] = useState('')

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
                <div className='mx-8 w-half'>
                    <Input onChange={searchFun} value={value} />
                </div>
            </nav>
        </>
    )
}

export default Nav