'use strict';

var React = require ("react");
var SongsApi = require('../api/songsApi');
var SongsList= require('./songsList');

var MyMusic = React.createClass({
	getInitialState: function() {
		return {
			songs: []
		};
	},

	componentDidMount: function() {
		if (this.isMounted()) {
			var self=this;
			SongsApi.getPopularPlaylist(function(response){
				self.setState({ songs: response.tracks });
				console.log("daaaata");
				console.log(response);
			});
		}
	},

	render: function(){
		return (
	        <div className="myMusic">
					<SongsList songs={this.state.songs} />
	        </div>
		);
	}
});

module.exports = MyMusic;