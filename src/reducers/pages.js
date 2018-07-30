/**
 * Created by tanmv on 30/07/2018.
 */

import {pageType} from '../actions';

let page = {};
const pages = (state = page, action) =>{
	switch (action.type){
		case pageType.SET_PAGE:
			state.info = action.info;
			return state;
		case pageType.GET_PAGE:
			return state.info;
		default: return state;
	}
};

export default pages;