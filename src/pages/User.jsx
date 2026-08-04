import React from "react";
import { useParams, useOutletContext } from "react-router-dom";
import { Data } from "../components"

function User() {
    const { username } = useParams()

    return (
        <>
            <Data value={username} />
        </>
    )
}

export default User