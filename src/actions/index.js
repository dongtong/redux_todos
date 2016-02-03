import Axios from 'axios';
//const API_KEY = 'xxx'

export const FETCH_TODOS = 'FETCH_TODOS';

export function fetchTodos () {
	const url = 'http://localhost:3000/v2'
	const request = Axios.get(url);

	return {
		type: FETCH_TODOS,
		payload: request
	}
}