'use strict';

var React = require ("react");
var hack = require('./searchHack');
var SongsApi = require('../api/songsApi');
var PlaylistList = require('./playTwoList');

var PlayTwo = React.createClass({
	getInitialState: function() {
		return {
			playtwo: []
		};
	},

	componentDidMount: function() {
		if (this.isMounted()) {
			var self = this;
			console.log('traznea');
			SongsApi.getPlaylistByMood(hack.getSearch(), function(response){
				self.setState({ playtwo: response });
				console.log("play");
				console.log(response);
			});
		}
	},

	render: function(){
		return (
	        <div className="playBox">
				<PlaylistList playlist={this.state.playtwo} />
	        </div>
		);
	}
});

module.exports = PlayTwo;