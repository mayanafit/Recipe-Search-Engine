import React from 'react';

const notFound = (props) => {
    const backHome = () => {
        props.history.push(`/`)
    }
    return (
        <div className="center_position notFound">
            <h1>Sorry, 404 Not Found.</h1>
            <button onClick={backHome}>Back to Home</button>
        </div>
    )
}

export default notFound