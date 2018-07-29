/**
 * Created by tanmv on 29/07/2018.
 */

import React, { Component } from "react";
import { Route } from "react-router-dom";

import Header from "../partials/Header";
import Home from "./Home";
import Videos from "./Videos";

class Layout extends Component {
	render() {
		return (
			<React.Fragment>
				<Header />
				<Route exact path="/" component={Home} />
				<Route exact path="/videos" component={Videos} />
			</React.Fragment>
		);
	}
}

export default Layout;