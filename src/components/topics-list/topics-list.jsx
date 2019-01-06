import React, { Component } from 'react';

import AddTopic from '../add-topic/add-topic';
import Topic from '../topic/topic';

class TopicsList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            "topics": []
        };
    }

    componentDidMount() {
        this.setState({
            "topics": [
                {
                    "id": 1,
                    "name": "How does dependency injection work?",
                    "events": [
                        {
                            "id": 1
                        },
                        {
                            "id": 2
                        },
                        {
                            "id": 3
                        }
                    ],
                    "votes": 28
                },
                {
                    "id": 2,
                    "name": "Containerize an app",
                    "events": [
                        {
                            "id": 4
                        }
                    ],
                    "votes": 16
                }
            ]
        });
    }

    render() {
        const { topics } = this.state;

        return (
            <div>
                <AddTopic />

                <h3>Popular Topics</h3>

                {topics.map(topic =>
                    <Topic topic={topic} key={topic.id} />
                )}

                <p>{JSON.stringify(topics)}</p>
            </div>
        );
    }
}

export default TopicsList;