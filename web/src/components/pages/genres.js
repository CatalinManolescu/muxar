'use strict';

var React = require ("react");
var SongsApi = require('../api/songsApi');
var GenresList= require('./genresList');


var Genres = React.createClass({
	getInitialState: function() {
		return {
			genres: []
		};
	},

	componentDidMount: function() {
		if (this.isMounted()) {
			console.log("component mounted");
			var self = this;
			SongsApi.getGenresList(function(response){
				self.setState({ genres: response });
			})
		}
	},

	render: function(){
		return (
	        <div>
				<GenresList genres={this.state.genres} />
	        </div>
		);
	}
});

module.exports = Genres;