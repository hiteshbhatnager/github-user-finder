import React from "react";
import { useOutletContext } from "react-router-dom";
import { List } from "../components"

function Home() {
    const { value } = useOutletContext()

    return (
        <>
            <List value={value} />
        </>
    )
}

export default Home