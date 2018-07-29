/**
 * Created by tanmv on 29/07/2018.
 */

export const userType = {
	SET_USER: 'SET_USER',
	GET_USER: 'GET_USER'
};

export const setUser = info => ({
	type: userType.SET_USER,
	info
});