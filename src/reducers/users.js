/**
 * Created by tanmv on 29/07/2018.
 */

import {userType} from '../actions';

let user = {};
const users = (state = user, action) =>{
	switch (action.type){
		case userType.SET_USER:
			return {
				...state,
				info: action.info
			};
			break;
		case userType.GET_USER:
			return state.info;
			break;
		default: return state;
	}
};

export default users;