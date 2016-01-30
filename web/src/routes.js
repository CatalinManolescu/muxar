'use strict';

var React = require ('react');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var Redirect = Router.Redirect;

var routes = (
	<Route name="app" path="/" handler={require("./components/pages/app")}>
		<DefaultRoute handler={require("./components/pages/genres")}/>
		<Route name="mood" handler={require("./components/pages/mood")}/>
		<Route name="surprise" handler={require("./components/pages/surpriseMe")}/>
		<Route name="recommendations" handler={require("./components/pages/recommendations")}/>
		<Route name="playlist" handler={require("./components/pages/playlist")}/>
		<Route name="playl" handler={require("./components/pages/playTwo")}/>
		<Route name="results" handler={require("./components/pages/results")}/>
	</Route>
);

module.exports = routes;