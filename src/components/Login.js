import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import '../assets/css/login.css';

export default class Login extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="login-box">
          <div className="login-logo">
            <b>VAFA</b>Videos
          </div>
          <div className="login-box-body">
            <p className="login-box-msg">Sign in to system</p>
            <form method="post">
              <div className="form-group has-feedback">
                <input type="email" className="form-control" placeholder="Email"/>
                <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
              </div>
              <div className="form-group has-feedback">
                <input type="password" className="form-control" placeholder="Password"/>
                <span className="glyphicon glyphicon-lock form-control-feedback"></span>
              </div>
              <div className="row">
                <div className="col-xs-8">
                  <div className="checkbox">
                    <label>
                      <input type="checkbox"/> Remember Me
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
}