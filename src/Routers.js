import React from "react";
import { Route } from "react-router-dom";

import Login from "./components/Login";
import Layout from './components/Layout';
import NotFound from './components/NotFound';

const map = {
	'/login': Login,
	'/videos': Layout,
	'/': Layout
};

class ReactRouter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			path: window.location.pathname
		};
	}

	render() {
		const page = map[window.location.pathname]? map[window.location.pathname]: NotFound;

		return (
			<React.Fragment>
				{/*<Route exact path="/login" component={Login} />
				<Route exact={['/login', '/forgot', '/register'].includes(window.location.pathname)} path="/" component={Layout} />
				<Route component={NotFound} />*/}
				<Route component={page} />
			</React.Fragment>
		);
	}
}

export default ReactRouter;