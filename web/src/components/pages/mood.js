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
		console.log("clickkkkkkkkk");
	},

	componentDidMount: function() {
		if (this.isMounted()) {
			this.setState({ moods: SongsApi.getMoodPackages() });
		}
	},

	render: function(){
		return (
	        <div className="moodsBox">
				<MoodsList moods={this.state.moods} />
	        </div>
		);
	}
});

module.exports = Mood;