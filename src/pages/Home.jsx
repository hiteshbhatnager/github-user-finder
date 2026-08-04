import React from "react";
import { useOutletContext } from "react-router-dom";
import { List } from "../components"

function Home() {
    const { value } = useOutletContext()

    console.log(value)

    return (
        <>
            <List value={value} />
        </>
    )
}

export default Home