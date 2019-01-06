import React, { Component } from 'react';

class AddTopic extends Component {
    constructor(props) {
        super(props);

        this.state = {
            "name": "",
            "successCriteria": ""
        };

        this.addTopicHandler = props.addTopicHandler.bind(this);
        this.handleInputChanged = this.handleInputChanged.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChanged(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.addTopicHandler({
            name: this.state.name,
            successCriteria: this.state.successCriteria
        });
    }

    render() {
        const isFormValid = this.state.name.length > 0 && this.state.successCriteria.length > 0;

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input
                            type="text"
                            name="name"
                            value={this.state.name}
                            onChange={this.handleInputChanged}
                            className="form-control"
                            placeholder="Request a new topic" />
                    </div>
                    <div className="form-group">
                        <label>Success criteria</label>
                        <input 
                            type="text" 
                            name="successCriteria"
                            value={this.state.successCriteria}
                            onChange={this.handleInputChanged}
                            className="form-control" 
                            placeholder="What does success look like?" />
                    </div>
                    <button type="submit" className="btn btn-primary" disabled={!isFormValid}>Add topic</button>
                </form>

                <p>Valid: {isFormValid.toString()}</p>

                <p>Topic: {JSON.stringify(this.state)}</p>
            </div>
        );
    }
}

export default AddTopic;