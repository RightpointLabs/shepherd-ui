import React from "react";

const Topic = ({ topic }) => {
    return (
        <div className="card">
            <div className="card-body">
                <h5>{topic.name}</h5>
                <p>Votes: {topic.votes}</p>
            </div>
        </div>
    );
};

export default Topic;