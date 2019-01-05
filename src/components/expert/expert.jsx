import React, { Component } from 'react';

class Expert extends Component {
    constructor(props) {
        super(props);

        this.state = {
            "expert": {
                "name": null,
                "location": null,
                "events": [],
                "topics": []
            },
            "expertId": props.match.params.id
        }
    }

    componentDidMount() {
        this.setState({
            "expert": {
                "name": "Jill Architect",
                "location": "Chicago, IL",
                "events": [
                    {
                        "id": 1,
                        "type": "Lightning Talk",
                        "teacher": "Jill Architect",
                        "date": "02/18/2019"
                    }
                ],
                "topics": [
                    {
                        "id": 1,
                        "name": "Angular vs React?",
                        "events": [
                            {
                                "id": 1
                            },
                            {
                                "id": 2
                            }
                        ]
                    }
                ]
            }
        })
    }

    render() {
        return (
            <div>
                <h4>{this.state.expert.name}</h4>
                <h5>{this.state.expert.location}</h5>
            </div>
        );
    }
}

export default Expert;