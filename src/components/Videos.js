import React, { Component } from "react";
import {pageType} from "../actions";
import stores from '../stores';

class Videos extends Component {
	componentWillMount() {
		stores.dispatch({
			type: pageType.SET_PAGE,
			info: {
				title: 'Videos',
				name: 'Videos',
				description: 'Manager'
			}
		});
	}

	render() {
		return (
			<React.Fragment>
				<div style={{ textAlign: "center",marginTop:'10rem' }}>
					<h1>Videos is there</h1>
				</div>
			</React.Fragment>
		);
	}
}

export default Videos;