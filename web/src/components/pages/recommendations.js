'use strict';

var React = require ('react');
var RecList = require('./recList')
var hack = require('./searchHack');
var SongsApi = require('../api/songsApi');

var Recommendations = React.createClass({
	getInitialState: function() {
		return {
			artists: []
		};
	},

	componentDidMount: function(){
		var self = this;
		SongsApi.firstSearchByArtist(hack.getSearch(), function(response){
			self.setState({ artists: response });
		});
	},

	render: function(){
		return (
	        <div className="recBox">
				<RecList rec={this.state.artists}/>
	        </div>
		);
	}
});

module.exports = Recommendations;