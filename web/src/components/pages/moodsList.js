"use strict";

var React = require('react');

var MoodsList = React.createClass({
	propTypes: {
		moods: React.PropTypes.array.isRequired
	},

	render: function() {
		var createMoodBox = function(mood) {
			return (
					<div className="mood" 
							key={mood.name}
							onClick={this.props.onClick}>
						<label className="moodSpan">{mood.name}</label>
					</div>
			);
		};

		return (
			<div>
				{this.props.moods.map(createMoodBox, this)}
			</div>
		);
	}
});

module.exports = MoodsList;