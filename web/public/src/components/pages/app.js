

var React = require('react');
var Header = require('../common/header');
var Menu = require('../common/menu');
var RouteHandler = require('react-router').RouteHandler;
var MyMusic= require('./myMusic');
$ = jQuery = require('jquery');


var App = React.createClass({
	render: function(){
		return (
			<div className="all">
				<Header/>
				<div className="boxUnderHeader">
					<Menu/>
				</div>
				<div className="content">
					<RouteHandler/>
				</div>
				<MyMusic/>
			</div>
		);

	}
});

module.exports = App;