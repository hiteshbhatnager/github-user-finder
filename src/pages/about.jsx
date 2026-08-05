import React from "react";

function About() {

    return (
        <div className="min-h-screen bg-gray-500 text-white px-6 py-12">
            <div className="max-w-5xl mx-auto">

                <div className="bg-gray-800 rounded-xl p-8 m-8 shadow-lg">
                    <h1 className="text-4xl font-bold text-center mb-4 text-white">
                        About GitHub User Finder
                    </h1>
                    <p className="text-center text-gray-400 mb-10 ">
                        Search GitHub users, view their profiles, and explore their public repositories.
                    </p>
                </div>

                <div className="bg-gray-800 rounded-xl p-8 shadow-lg">
                    <h2 className="text-2xl font-semibold mb-4">
                        📌 Project Overview
                    </h2>

                    <p className="text-gray-300 leading-7">
                        GitHub User Finder is a React application that allows users to search
                        GitHub profiles using the GitHub REST API. It displays matching users,
                        detailed profile information, and their public repositories in a clean
                        and responsive interface.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mt-8">

                    <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
                        <h3 className="text-xl font-semibold mb-4">
                            🚀 Features
                        </h3>

                        <ul className="space-y-2 text-gray-300 list-disc list-inside">
                            <li>Search GitHub users</li>
                            <li>Live search with debounce</li>
                            <li>View profile details</li>
                            <li>Browse public repositories</li>
                            <li>Responsive design</li>
                            <li>React Router navigation</li>
                        </ul>
                    </div>

                    <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
                        <h3 className="text-xl font-semibold mb-4">
                            🛠️ Technologies
                        </h3>

                        <ul className="space-y-2 text-gray-300 list-disc list-inside">
                            <li>React</li>
                            <li>React Router DOM</li>
                            <li>Tailwind CSS</li>
                            <li>GitHub REST API</li>
                            <li>JavaScript (ES6+)</li>
                            <li>Vite</li>
                        </ul>
                    </div>

                </div>

                <div className="bg-gray-800 rounded-xl p-8 shadow-lg mt-8">
                    <h3 className="text-2xl font-semibold mb-4">
                        📖 How to Use
                    </h3>

                    <ol className="space-y-3 text-gray-300 list-decimal list-inside">
                        <li>Enter a GitHub username in the search bar.</li>
                        <li>Select a user from the search results.</li>
                        <li>View the user's profile information.</li>
                        <li>Browse their public repositories.</li>
                        <li>Click a repository to open it on GitHub.</li>
                    </ol>
                </div>

                <div className="bg-gray-800 rounded-xl p-8 shadow-lg mt-8 text-center">
                    <h3 className="text-2xl font-semibold mb-4">
                        👨‍💻 Developer
                    </h3>

                    <p className="text-gray-300">
                        Developed by <span className="font-semibold text-white">Hitesh Bhatnagar</span>
                    </p>

                    <p className="text-gray-500 mt-2">
                        Built as a React learning project to practice API integration,
                        routing, state management, and responsive UI development.
                    </p>
                </div>

            </div>
        </div>
    );
}

export default About;