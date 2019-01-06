import React, { Component } from 'react';

class AddTopic extends Component {
    constructor(props) {
        super(props);

        this.state = {
            "name": "",
            "successCriteria": ""
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div>
                <form>
                    <div className="form-group">
                        <label>Name</label>
                        <input
                            type="text"
                            name="name"
                            value={this.state.name}
                            onChange={this.handleInputChange}
                            className="form-control"
                            placeholder="Request a new topic" />
                    </div>
                    <div className="form-group">
                        <label>Success criteria</label>
                        <input 
                            type="text" 
                            name="successCriteria"
                            value={this.state.successCriteria}
                            onChange={this.handleInputChange}
                            className="form-control" 
                            placeholder="What does success look like?" />
                    </div>
                    <button type="submit" className="btn btn-primary">Add topic</button>
                </form>

                <p>Topic: {JSON.stringify(this.state)}</p>
            </div>
        );
    }
}

export default AddTopic;