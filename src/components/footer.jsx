import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="w-full bg-gray-900 py-4">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">

                <div className="flex items-center gap-4">
                    <span className="text-gray-300">Source:</span>

                    <a
                        href="https://docs.github.com/en"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg bg-black px-4 py-2 hover:bg-gray-800 transition"
                    >
                        GitHub Docs
                    </a>

                    <Link
                        to="/about"
                        className="rounded-lg bg-black px-4 py-2 hover:bg-gray-800 transition"
                    >
                        About
                    </Link>
                </div>

                <p className="text-sm text-gray-400">
                    © {new Date().getFullYear()} Hitesh Bhatnagar
                </p>

            </div>
        </footer>
    );
}

export default Footer;