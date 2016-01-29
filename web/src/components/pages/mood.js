'use strict';

var React = require('react');
var toastr = require('toastr');
var SongsApi = require('../api/songsApi');
var MoodsList = require('./moodsList');

var Mood = React.createClass({	
	getInitialState: function() {
		return {
			moods: []
		};
	},

	handleClick: function(index){
		console.log(index);
		var self = this;
		/*switch(index){
			case 'Positive':
				SongsApi.getPlaylistByMood("playful", function(response){
		            self.transitionTo('playlists', {playlist: response});
		            pubsub.publish('playlists', response);
		          });
				break;
			case 'Blue':
				SongsApi.getPlaylistByMood("sad", function(response){
		            self.transitionTo('playlists', {playlist: response});
		            pubsub.publish('playlists', response);
		          });
				break;
			case 'Energetic':
				SongsApi.getPlaylistByMood("energetic", function(response){
		            self.transitionTo('playlists', {playlist: response});
		            pubsub.publish('playlists', response);
		          });
				break;
			case 'Chill':
				SongsApi.getPlaylistByMood("calming", function(response){
		            self.transitionTo('playlists', {playlist: response});
		            pubsub.publish('playlists', response);
		          });
				break;
		}*/
	},

	componentDidMount: function() {
		if (this.isMounted()) {
			this.setState({ moods: SongsApi.getMoodPackages() });
		}
	},

	render: function(){
		return (
	        <div className="moodsBox">
				<MoodsList moods={this.state.moods} click={this.handleClick} />
	        </div>
		);
	}
});

module.exports = Mood;