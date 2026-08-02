import React, { useEffect, useState } from "react";
import Profile from "./profile";
import input from './input'

function Data({
    value = "",
}) {
    const [user, setUser] = useState(null)
    const [repos, setRepos] = useState(null)
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
        }, 500)

        const timer2 = setTimeout(() => {
            fetch(`https://api.github.com/users/${value}/repos`,
                {
                    headers: {
                        Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`
                    }
                })
                .then(res => res.json())
                .then(data => {
                    if (data.message === "Not Found") {
                        setRepos(null)
                    } else {
                        setRepos(data)
                        console.log("hitesh", data)
                    }
                })
        }, 500)

        return () => clearTimeout(timer)
        return () => clearTimeout(timer2)
    }, [value])

    if (error) return <div>{error}</div>

    if (!user) return null;

    return (
        <Profile username={user.login} avatar={user.avatar_url} followers={user.followers}
            followings={user.followings} repo="10" type={user.type} name={user.name} />
    );
}

export default Data