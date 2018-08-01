import React from "react";
import { Route } from "react-router-dom";
import stores from './stores';
import {userType} from './actions';

import Login from "./components/Login";
import Layout from './components/Layout';
import NotFound from './status/404';
// import Unauthorized from './status/401';

import {profile} from './services/users';

const map = {
	'/login': Login,
	'/videos': Layout,
	'/': Layout
};

class ReactRouter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	async componentWillMount() {
		// const res = await profile();
		// if(res.error !== 0) {
		// 	this.state.user = res.info;
		// 	stores.dispatch({
		// 		type: userType.SET_USER,
		// 		info: res.info
		// 	});
		// }
	}

	render() {
		// const storeState = stores.getState();
		// if(!storeState.users.info) {
		// 	const res = await profile();
		// 	if(res.error === 0) {
		// 		stores.dispatch({
		// 			type: userType.SET_USER,
		// 			info: res.info
		// 		});
		// 	}
		// }
		const page = map[window.location.pathname]? map[window.location.pathname]: NotFound;
		return (
			<React.Fragment>
				<Route component={page} />
			</React.Fragment>
		);
	}
}

export default ReactRouter;