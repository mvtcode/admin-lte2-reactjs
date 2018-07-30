/**
 * Created by tanmv on 29/07/2018.
 */

import React, { Component } from "react";
import { Route } from "react-router-dom";

import Header from "../partials/Header";
import Sidebar from "../partials/Sidebar";
import Home from "./Home";
import Videos from "./Videos";
import stores from '../stores';
import '../assets/css/style.css';

class Layout extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			name: '',
			description: ''
		};
	}

	componentWillMount() {
		stores.subscribe(() => {
			const storeState = stores.getState();
			this.setState(storeState.pages.info);
			document.title = storeState.pages.info.title;
		});
	}

	render() {
		return (
			<React.Fragment>
				<Header />
				<Sidebar />
				<div className="content-wrapper">
					<section className="content-header">
						<h1> {this.state.name} <small>{this.state.description}</small></h1>
					</section>
					<section className="content container-fluid">
						<Route exact path="/" component={Home} />
						<Route exact path="/videos" component={Videos} />
					</section>
				</div>
			</React.Fragment>
		);
	}
}

export default Layout;