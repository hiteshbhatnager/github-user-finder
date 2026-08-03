import React from "react";

function Footer() {
    return (
        <>
            <footer className='w-full h-auto py-4 px-5 flex justify-between items-center bg-gray-900'>
                <div className="px-4">
                    <span className="mr-2 text-gray-200">Source:</span>

                    <a
                        href="https://docs.github.com/en"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center rounded-lg bg-black px-4 py-2 text-white transition hover:bg-gray-800"
                    >
                        GitHub Docs
                    </a>
                </div>
                <div className='font-light text-xs items-baseline-last absolute bottom-0 right-0 m-2'>by hitesh bhatnager</div>
            </footer>
        </>
    )
}

export default Footer