import React, { Component } from 'react';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' }

        this.onIpuntChange = this.onIpuntChange.bind(this);
    }

    onIpuntChange(event) {
        this.setState({term: event.target.value});
    }

    onFormSubmit(event) {
        event.preventDefault();
        // We need to go and fetch weather data.
    }

    render() {
        return (
            <form 
                onSubmit={this.onFormSubmit}
                className="input-group">
                <input 
                    placeholder="Search for a city"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onIpuntChange} />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-seconday">Search</button>
                </span>
            </form>
        );
    }
} 