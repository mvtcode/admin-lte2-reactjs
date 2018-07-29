import React, { Component } from "react";
import {connect} from "react-redux";
import {userType, setUser} from "../actions";

class Home extends Component {
	render() {
		return (
			<div style={{ textAlign: "center", marginTop: "10rem" }}>
				<h1>App is there</h1>
				{this.props.getUser}
			</div>
		);
	}
}

const mapState = state => ({
	getUser: state.users
});

const mapDispatch = dispatch =>({
	setUser: info => dispatch(setUser(info))
});

export default connect(mapState, mapDispatch)(Home);