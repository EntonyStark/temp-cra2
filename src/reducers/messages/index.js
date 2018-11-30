import * as types from '../../constants/actionTypes';
import initialState from '../initial-state';

export default (state = initialState.messages, { type, payload }) => {
	switch (type) {
		case types.ADD_MESSAGE: {
			const newMessage = { ...payload.val, messageId: payload.key };
			return { ...state, data: state.data.concat(newMessage) };
		}
		case types.REMOVE_MESSAGE: {
			const data = state.data.filter(el => el.messageId !== payload);
			return { ...state, data };
		}
		default:
			return state;
	}
};
