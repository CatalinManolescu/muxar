'use strict';

var React = require ("react");
var hack = require('./searchHack');
var SongsApi = require('../api/songsApi');
var PlaylistList = require('./playTwoList');

var Results = React.createClass({
	getInitialState: function() {
		return {
			results: []
		};
	},

	componentDidMount: function() {
		if (this.isMounted()) {
			var self = this;
			SongsApi.getPlaylistByGenre(hack.getSearch(), function(response){
				self.setState({ results: response });
				console.log("play2");
				console.log(response);
			});
		}
	},

	render: function(){
		return (
	        <div className="playBox">
				<PlaylistList playlist={this.state.results} />
	        </div>
		);
	}
});

module.exports = Results;