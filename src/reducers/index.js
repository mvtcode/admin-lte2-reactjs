/**
 * Created by tanmv on 29/07/2018.
 */

import { combineReducers } from 'redux'
import users from './users';
import pages from './pages';

export default combineReducers({
	users, pages
});