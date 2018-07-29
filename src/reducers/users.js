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
			break;
		case userType.GET_USER:
			console.log('bbbbbbbb');
			return state.info;
			break;
		default: return state;
	}
};

export default users;