/**
 * Created by tanmv on 29/07/2018.
 */

export const userType = {
	SET_USER: 'SET_USER',
	GET_USER: 'GET_USER'
};

export const pageType = {
	SET_PAGE: 'SET_PAGE',
	GET_PAGE: 'GET_PAGE'
};

export const setUser = info => ({
	type: userType.SET_USER,
	info
});

export const setPage = info => ({
	type: pageType.SET_PAGE,
	info
});
