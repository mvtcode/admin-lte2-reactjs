/**
 * Created by tanmv on 29/07/2018.
 */

import {userType} from '../actions';

let user = {};
const users = (state = user, action) =>{
	switch (action.type){
		case userType.SET_USER:
			state.info = action.info;
			return state;
		case userType.GET_USER:
			return state.info;
		default: return state;
	}
};

export default users;