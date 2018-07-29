import React from "react";
import { Route } from "react-router-dom";

import Login from "./components/Login";
import Layout from './components/Layout';

class ReactRouter extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Route exact path="/login" component={Login} />
				<Route exact={window.location.pathname === '/login'} path="/" component={Layout} />
			</React.Fragment>
		);
	}
}

export default ReactRouter;