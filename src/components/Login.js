import React, { Component } from "react";
import {connect} from "react-redux";
import { NavLink } from "react-router-dom";
import {userType, setUser} from "../actions";
import users from "../reducers/users";

import '../assets/css/login.css';

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
      remember: ''
		};
		this.onSubmit = this.onSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		this.setState({[e.target.name]: e.target.value})
	}

	onSubmit(event) {
	  event.preventDefault();
		this.props.setUser({
      email: this.state.email,
      password: this.state.password,
      remember: this.state.remember
    });
    this.props.history.push("/");
  }

  render() {
    return (
      <React.Fragment>
        <div className="login-box">
          <div className="login-logo">
            <b>VAFA</b>Videos
          </div>
          <div className="login-box-body">
            <p className="login-box-msg">Sign in to system</p>
            <form method="post" onSubmit={this.onSubmit}>
              <div className="form-group has-feedback">
                <input name="email" onChange={e => this.handleChange(e)} type="email" className="form-control" placeholder="Email"/>
                <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
              </div>
              <div className="form-group has-feedback">
                <input name="password" onChange={e => this.handleChange(e)} type="password" className="form-control" placeholder="Password"/>
                <span className="glyphicon glyphicon-lock form-control-feedback"></span>
              </div>
              <div className="row">
                <div className="col-xs-8">
                  <div className="checkbox">
                    <label>
                      <input name="remember" type="checkbox" onClick={e => this.handleChange(e)}/> Remember Me
                    </label>
                  </div>
                </div>
                <div className="col-xs-4">
                  <button type="submit" className="btn btn-primary btn-block btn-flat">Sign In</button>
                </div>
              </div>
            </form>

            {/*<div className="social-auth-links text-center">
              <p>- OR -</p>
              <a href="#" className="btn btn-block btn-social btn-facebook btn-flat"><i className="fa fa-facebook"></i> Sign in using
                Facebook</a>
              <a href="#" className="btn btn-block btn-social btn-google btn-flat"><i className="fa fa-google-plus"></i> Sign in using
                Google+</a>
            </div>*/}

            <NavLink to="/forgot">I forgot my password</NavLink> <br/>
            <NavLink to="/register" className="text-center">Register a new membership</NavLink>
          </div>
        </div>
      </React.Fragment>
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

export default connect(mapState, mapDispatch)(Login);