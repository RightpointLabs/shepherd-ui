import React from "react";

const Expert = ({ match }) => {
    return (
        <div>
            <h2>Expert</h2>

            <p>{match.params.id}</p>
        </div>
    );
};

export default Expert;