import React from "react";
import { Route, Switch, Redirect} from "react-router-dom";
import stores from './stores';

import Login from "./components/Login";
import Layout from './components/Layout';
import NotFound from './status/404';
// import Unauthorized from './status/401';

class ReactRouter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			user: stores.getState().users.info
		};
	}

	render() {

		const path = window.location.pathname;
		if(stores.getState().users.info || ['/login', '/logout'].includes(path)) {
			return (
				<Switch>
					<Route exact path='/' component={Layout}/>
					<Route path='/videos' component={Layout}/>
					<Route path='/login' component={Login}/>
					<Route path="*" component={NotFound}/>
				</Switch>
			);
		} else {
			const redirect = `/login${path !== '/'? `?redirect=${path}`: ''}`;
			return (
				<Redirect to={redirect}/>
			)
		}
	}
}

export default ReactRouter;