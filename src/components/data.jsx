import React, { useEffect, useState } from "react";
import { Profile, Repos } from "./index";

function Data({
    value = "",
}) {
    const [user, setUser] = useState(null)
    const [repos, setRepos] = useState([])
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
                        setRepos([])
                    } else {
                        setRepos(data)
                    }
                })
        }, 500)

        return () => {
            clearTimeout(timer),
                clearTimeout(timer2)
        }
    }, [value])

    if (error) return <div>{error}</div>

    if (!user) return null;

    return (
        <>
            <Profile username={user.login}
                avatar={user.avatar_url}
                followers={user.followers}
                followings={user.followings}
                repo={repos.length} type={user.type}
                name={user.name} />

            {
                repos.map((repo) => (
                    <Repos key={repo.id}
                        name={repo.name}
                        url={repo.html_url}
                        description={repo.description}
                        language={repo.language}
                        stars={repo.stargazers_count}
                        forks={repo.forks_count} />
                ))
            }
        </>
    );
}

export default Data