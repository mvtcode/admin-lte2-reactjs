import React, { Component } from "react";
import {pageType} from "../actions";
import stores from '../stores';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user_info: stores.getState().users
		};
	}

	componentWillMount() {
		stores.dispatch({
			type: pageType.SET_PAGE,
			info: {
				title: 'Dashboard',
				name: 'Dashboard',
				description: ''
			}
		});
	}

	render() {
		return (
			<div style={{ textAlign: "center", marginTop: "10rem" }}>
				<h1>App is there {this.state.user_info.email}</h1>
			</div>
		);
	}

	componentDidMount() {
		//
	}
}
export default Home;