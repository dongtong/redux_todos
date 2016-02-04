import FETCH_TODOS from '../actions/index';
//track
//在这里不要在操作时改变state
//可以使用immutable.js
export default function (state = null, action) {
	switch (action.type) {
		case FETCH_TODOS:
		  //return state.concat([action.payload.data]);
		  return [action.payload.data, ...state];
	}

	return state;
}