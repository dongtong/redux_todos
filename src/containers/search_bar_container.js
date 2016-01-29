import React, { Component } from  'react';

export default class SearchBarContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {query: ''};
		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onInputChange(event) {
		this.setState({query: event.target.value});
	}

	onFormSubmit(event) {
		event.preventDefault();
		console.log(this.refs.city.value);
	}

	render() {
		return (
			<form onSubmit={this.onFormSubmit} className="input-group">
				<input
				  ref="city"
				  placeholder="城市..."
				  className="form-control"
				  value={this.state.query}
				  onChange={this.onInputChange}
				  ></input>
				<span className="input-group-btn">
					<button type="submit" className="btn btn-secondary">查询 </button>
				</span>
			</form>
		);
	}
}