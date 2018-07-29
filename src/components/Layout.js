/**
 * Created by tanmv on 29/07/2018.
 */

import React, { Component } from "react";
import { Route } from "react-router-dom";

import Header from "../partials/Header";
import Sidebar from "../partials/Sidebar";
import Home from "./Home";
import Videos from "./Videos";

import '../assets/css/style.css';

class Layout extends Component {
	render() {
		return (
			<React.Fragment>
				<Header />
				<Sidebar />
				<div className="content-wrapper">
					<section className="content-header">
						<h1> Trang chu <small>Optional description</small></h1>
						{/*<ol className="breadcrumb">
							<li><a href="#"><i className="fa fa-dashboard"></i> Level</a></li>
							<li className="active">Here</li>
						</ol>*/}
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