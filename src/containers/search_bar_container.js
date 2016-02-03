import React, { Component } from  'react';
//绑定redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchTodos } from '../actions/index';

class SearchBarContainer extends Component {
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
		this.props.fetchTodos();
		this.setState({query: ''});
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

function mapDispatchToProps (dispatch) {
	return bindActionCreators( { fetchTodos }, dispatch);
}

//null是传递state,这里不需要
export default connect(null, mapDispatchToProps)(SearchBarContainer);