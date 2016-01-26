'use strict';

var React = require('react');
var Router = require('react-router');
var routes = require("./routes");

// var Genres = require('./components/pages/genres');
// var Mood = require('./components/pages/mood');
// var MyMusic = require('./components/pages/myMusic');

Router.run(routes, Router.HistoryLocation, function(Handler){
	React.render(<Handler/>, document.getElementById('app'));
});