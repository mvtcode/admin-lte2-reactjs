import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Ionicon from 'react-ionicons';

class Home extends Component {
	render() {
		return (
			<div style={{ textAlign: "center", marginTop: "10rem" }}>
				<h1>App is there</h1>
				<FontAwesomeIcon icon="stroopwafel" />
				<Ionicon icon="ios-add-circle" fontSize="35px" onClick={() => console.log('Hi!')} color="red"/>
				<Ionicon icon="ios-alert" rotate={true} fontSize="35px" color="blue"/>
				<Ionicon icon="ios-analytics-outline" fontSize="35px" color="#C9C9C9"/>
				<Ionicon icon="md-basket" fontSize="35px" color="rgb(125, 176, 24)"/>
				<Ionicon icon="md-calculator" rotate={true} fontSize="35px" color="rgb(125, 176, 24)"/>
			</div>
		);
	}
}

export default Home;