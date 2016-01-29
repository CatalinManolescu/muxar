"use strict";

var React = require('react');

var RecList = React.createClass({
	propTypes: {
		rec: React.PropTypes.array.isRequired
	},

	render: function() {
		var createArtistRow = function(artist) {
			return (
				<p className="">{artist}</p>
			);
		};

		return (
			<div>
				{this.props.rec.map(createArtistRow, this)}
			</div>
		);
	}
});

module.exports = RecList;