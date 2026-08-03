import React from "react";

function Home() {
    const { value } = useOutLetContext()

    return (
        <>
            <Data value={value} />
        </>
    )
}

export default Home