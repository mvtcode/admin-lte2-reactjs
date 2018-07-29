/**
 * Created by tanmv on 29/07/2018.
 */
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import $ from 'jquery';

class Sidebar extends Component {
	active() {
		let url = window.location.pathname;
		$('.sidebar-menu li').removeClass('active').is(function() {
			let self = $(this);
			let a = self.children().first();
			let href = a.attr('href');
			if(href === url){
				self.addClass("active");
			} else {
				let ul = a.next();
				ul.find('a').is(function(){
					href = $(this).attr('href');
					if(href === url){
						self.addClass("active");
					}
				});
			}
		});
	}

	render() {
		return (
			<aside className="main-sidebar">
				<section className="sidebar">
					<ul className="sidebar-menu" data-widget="tree">
						<li className="header">Main menu</li>
						<li>
							<NavLink to="/" isActive={this.active}><i className="fa fa-dashboard"></i> <span>Dashboard</span></NavLink>
						</li>
						<li>
							<NavLink to="/videos" isActive={this.active}><i className="fa fa-video-camera"></i> <span>Videos</span></NavLink>
						</li>
					</ul>
				</section>
			</aside>
		);
	}

	componentDidMount() {
		this.active();
	}
}

export default Sidebar;