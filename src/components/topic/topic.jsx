import React from "react";

const Topic = ({ topic }) => {
    return (
        <div>
            <h2>{topic.name}</h2>

            <p>Votes: {topic.votes}</p>
        </div>
    );
};

export default Topic;