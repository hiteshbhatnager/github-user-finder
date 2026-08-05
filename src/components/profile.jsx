import React from "react";

function Profile({
    followings = "0",
    followers = "0",
    avatar,
    name = "",
    username = "",
    repos = "",
    type = ""
}) {
    return (
        <>
            <main className="w-[70%] h-auto flex justify-center items-center flex-col gap-6 m-8">
                <h1 className="my-4 text-3xl font-bold text-center tracking-wide">
                    GitHub Profile
                </h1>

                <div className="w-full max-w-4xl rounded-2xl bg-zinc-900 shadow-2xl p-8 text-white">

                    <div className="flex flex-col md:flex-row items-center md:items-start gap-10">

                        {/* Left Section */}
                        <div className="flex flex-col items-center">
                            <img
                                src={avatar}
                                alt="avatar"
                                className="w-44 h-44 rounded-full border-4 border-gray-700 object-cover shadow-lg"
                            />

                            <h2 className="mt-5 text-2xl font-bold">
                                {name}
                            </h2>

                            <p className="text-gray-400">
                                @{username}
                            </p>
                        </div>

                        {/* Right Section */}
                        <div className="flex-1">

                            {/* Stats */}
                            <div className="grid grid-cols-2 gap-6">

                                <div className="rounded-xl bg-zinc-800 p-5 text-center">
                                    <h3 className="text-sm text-gray-400">Followers</h3>
                                    <p className="text-2xl font-bold">{followers}</p>
                                </div>

                                <div className="rounded-xl bg-zinc-800 p-5 text-center">
                                    <h3 className="text-sm text-gray-400">Following</h3>
                                    <p className="text-2xl font-bold">{followings}</p>
                                </div>

                                <div className="rounded-xl bg-zinc-800 p-5 text-center">
                                    <h3 className="text-sm text-gray-400">Repositories</h3>
                                    <p className="text-2xl font-bold">{repos}</p>
                                </div>

                                <div className="rounded-xl bg-zinc-800 p-5 text-center">
                                    <h3 className="text-sm text-gray-400">Account Type</h3>
                                    <p className="text-2xl font-bold">{type}</p>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            </main>
        </>
    )
}

export default Profile