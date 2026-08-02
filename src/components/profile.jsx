import React from "react";

function Profile({
    followings = "0",
    followers = "0",
    avatar,
    name = "",
    username = "",
    repos = "10",
    type = ""
}) {
    return (
        <>
            <h1 className="align-middle m-2 w-full h-auto">GITHUB PROFILE</h1>
            <div className="w-full h-80 bg-black m-10 flex justify-center items-center rounded-lg">
                <div className="w-auto h-full flex">
                    <img src={avatar} alt="avtar" className="w-60 h-60 p-2" />
                    <div className="mx-8 my-10 flex">
                        <h1 className="font-bold">{name}</h1>
                        <h2 className="">@{username}</h2>
                    </div>
                </div>
                <div className="w-auto h-full flex justify-between flex-col flex-start">
                    <div className="flex m-4">
                        <h3 className="font-bold">followings :<span>{followings}</span></h3>
                        <h3 className="font-bold">followers :<span>{followers}</span></h3>
                    </div>
                    <div className="flex mx-15 gap-8 my-9">
                        <h2>repos = {repos}</h2>
                        <h2>type = {type}</h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile