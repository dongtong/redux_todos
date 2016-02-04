import React, { Component } from 'react';
import SearchBarContainer from '../containers/search_bar_container';
import TodoList from '../containers/todo_list_container';

export default class App extends Component {
	render() {
		return (
			<div>
				<SearchBarContainer />
				<TodoList />
			</div>
		)
	}
}