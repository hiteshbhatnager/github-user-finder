import React, { useEffect } from "react";
import { useParams, useOutletContext } from "react-router-dom";
import { Data } from "../components"

function User() {
    const { username } = useParams()
    const { setValue } = useOutletContext()

    useEffect(() => {
        setValue("")
    }, [])

    return (
        <>
            <Data value={username} />
        </>
    )
}

export default User