import React from "react";

function Repos({
    name = "",
    url = "",
    description = "",
    language = "",
    stars = 0,
    forks = 0,
}) {
    return (
        <div className="w-full max-w-4xl mx-auto bg-zinc-900 rounded-xl p-5 m-5 shadow-lg border border-zinc-800 hover:border-blue-500 transition-all duration-300">

            <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-semibold text-blue-400 hover:underline"
            >
                {name}
            </a>

            <p className="text-gray-400 mt-2">
                {description || "No description available."}
            </p>

            <div className="flex flex-wrap gap-6 mt-5 text-sm text-gray-300">
                <span>🖥️ {language || "Unknown"}</span>
                <span>⭐ {stars}</span>
                <span>🍴 {forks}</span>
            </div>
        </div>
    );
}

export default Repos;