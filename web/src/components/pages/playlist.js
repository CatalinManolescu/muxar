'use strict';

var React = require ("react");
var SongsApi = require('../api/songsApi');

var Playlist = React.createClass({
	getInitialState: function() {
		return {
			playlist: []
		};
	},

	componentDidMount: function() {
		if (this.isMounted()) {
			var self = this;
			SongsApi.getPlaylist(function(response){
				self.setState({ genres: response });
			});
		}
	},

	render: function(){
		return (
	        <div>
				<PlaylistList playlist={this.state.playlist} />
	        </div>
		);
	}
});

module.exports = Playlist;