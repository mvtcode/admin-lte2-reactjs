import React, { Component } from "react";
import {connect} from "react-redux";
import {userType, setUser} from "../actions";
import users from "../reducers/users";

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user_info: this.props.getUser.info? this.props.getUser.info: {}
		};
	}

	render() {
		return (
			<div style={{ textAlign: "center", marginTop: "10rem" }}>
				<h1>App is there {this.state.user_info.email}</h1>
			</div>
		);
	}

	componentDidMount() {
		console.log('getUser', this.props.getUser);
	}
}

const mapState = state => ({
	getUser: users(state.info, userType.GET_USER)
});

const mapDispatch = dispatch =>({
	setUser: info => dispatch(setUser(info))
});

export default connect(mapState, mapDispatch)(Home);