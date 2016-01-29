'use strict';

var React = require ('react');
var pubsub = require('pubsub-js');
var RecList = require('./recList')

var Recommendations = React.createClass({
	getInitialState: function() {
		return {
			artists: []
		};
	},

	componentDidMount: function(){

		//this.state.artists=this.props.params;
		console.log("here");
		console.log(this.props.params);
		console.log(this.state.artists);
	},

	componentWillMount: function() {
	    this.pubsub_token = pubsub.subscribe('artists', function(topic, artists) {
	      console.log('event artists: ');
	      console.log(artists);
	      this.setState({ artists: artists });
	    }.bind(this));
  },

  componentWillUnmount: function() {
    	pubsub.unsubscribe(this.pubsub_token);
  },

	render: function(){
		console.log("render");
		console.log(this.props.params);
		return (
        <div className="recBox">
			<RecList rec={this.state.artists}/>
        </div>
		);
	}
});

module.exports = Recommendations;