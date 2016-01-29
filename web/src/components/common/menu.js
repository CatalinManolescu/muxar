"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Menu = React.createClass({
	render: function() {
		return (
	        <div className="myMenu">
		        <div className="buttonsHolder">
					<div className="menuComponent"><Link to="app" className="menuLinks">genres</Link></div>
		            <div className="menuComponent"><Link to="mood"className="menuLinks"> mood</Link></div>
					<div className="menuComponent"><Link to="surprise" className="menuLinks"> surprise me</Link></div>
		        </div>
	        </div>
		);
	}
});

module.exports = Menu;
