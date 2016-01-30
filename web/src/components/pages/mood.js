'use strict';

var React = require('react');
var toastr = require('toastr');
var SongsApi = require('../api/songsApi');
var MoodsList = require('./moodsList');
var Router = require('react-router');
var hack = require('../pages/searchHack');

var Mood = React.createClass({	
	mixins: [Router.Navigation],

	getInitialState: function() {
		return {
			moods: []
		};
	},

	handleClick: function(index){
		console.log(index);
      	switch(index){
			case 'Positive':
				hack.setSearch("playful");
				break;
			case 'Blue':
				hack.setSearch("sad");
				break;
			case 'Energetic':
				hack.setSearch("energetic");
				break;
			case 'Chill':
				hack.setSearch("calming");
				break;
		}
		console.log(hack.getSearch());
		this.transitionTo('playl');
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