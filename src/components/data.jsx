import React, { useEffect, useState } from "react";
import input from './input'

function Data({
    value = "",
}) {
    const [user, setUser] = useState(null)
    const [error, setError] = useState('')

    useEffect(() => {
        if (!value.trim()) {
            setUser(null)
            setError('')
            return
        }
        const timer = setTimeout(() => {
            fetch(`https://api.github.com/users/${value}`, {
                headers: {
                    Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`
                }
            })
                .then(res => res.json())
                .then((data) => {
                    if (data.message === "Not Found") {
                        setUser(null)
                        setError("user not found")
                    } else {
                        setUser(data)
                        setError('')
                    }
                })
                .catch(() => {
                    setError("Something went wrong");
                    setUser(null);
                });
        }, 700)

        return () => clearTimeout(timer)
    }, [value])

    if (error) return <div>{error}</div>

    if (!user) return null;

    return (
        <div>
            testing {user.login}
        </div>
    );
}

export default Data