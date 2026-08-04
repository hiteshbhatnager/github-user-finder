import React from "react";
import { useParams } from "react-router-dom";

function User() {
    const { username } = useParams()

    return (
        <>
            <h1>User</h1>
            <p>This is the User page.</p>
        </>
    )
}

export default User