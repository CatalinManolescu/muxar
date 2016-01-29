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
			this.setState({ songs: SongsApi.getAllMySongs()});
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