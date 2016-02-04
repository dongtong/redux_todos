import React, { Component } from 'react';
import { connect } from 'react-redux';

class TodoListContainer extends Component {
	render() {
		return (
			<div>
				<ul>
					<li>待办事项</li>
				</ul>
			</div>
		);
	}
}

function mapStateToProps({ todos }) { //state
	return { todos }; //=> {todos: todos}, {todos: state.todos}
}

export default connect(mapStateToProps)(TodoListContainer);