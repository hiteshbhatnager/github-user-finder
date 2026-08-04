import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function List({
    value = ""
}) {

    const [list, setList] = useState([])

    useEffect(() => {
        if (!value.trim()) {
            setList([])
            return
        }

        const timer = setTimeout(() => {
            fetch(`https://api.github.com/search/users?q=${value}&per_page=5`, {
                headers: {
                    Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.total_count === 0) {
                        setList([])
                    } else {
                        setList(data.items)
                    }
                })
        }, 500)

        return () => clearTimeout(timer)
    }, [value])

    return (
        <>
            <div className="w-full max-w-4xl mx-auto mt-8 space-y-4">
                {list.map((user) => (
                    <div
                        key={user.id}
                        className="flex items-center justify-between bg-zinc-900 p-4 rounded-xl border border-zinc-800 hover:border-blue-500 transition-all duration-300 shadow-lg"
                    >
                        <div className="flex items-center gap-4">
                            <img
                                src={user.avatar_url}
                                alt={user.login}
                                className="w-16 h-16 rounded-full border-2 border-gray-700"
                            />

                            <div>
                                <h2 className="text-xl font-semibold text-white">
                                    {user.login}
                                </h2>

                                <p className="text-gray-400">
                                    GitHub User
                                </p>
                            </div>
                        </div>

                        <Link
                            to={`/user/${user.login}`}
                            className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition text-white font-medium"
                        >
                            View Profile
                        </Link>
                    </div>
                ))}
            </div>
        </>
    )
}

export default List