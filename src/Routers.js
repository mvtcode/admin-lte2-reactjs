import React from "react";
import { Route } from "react-router-dom";

import Login from "./components/Login";
import Layout from './components/Layout';
import NotFound from './status/404';
// import Unauthorized from './status/401';

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

	componentWillMount() {
		// console.log('will mount');
	}

	render() {
		const page = map[window.location.pathname]? map[window.location.pathname]: NotFound;
		return (
			<React.Fragment>
				<Route component={page} />
			</React.Fragment>
		);
	}
}

export default ReactRouter;