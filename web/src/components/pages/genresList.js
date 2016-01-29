"use strict";

var React = require('react');

var GenresList = React.createClass({
	propTypes: {
		genres: React.PropTypes.array.isRequired
	},

	render: function() {
		var createGenreBox = function(genre) {
			return (
				<div className="genre">
					<label className="genreSpan">{genre.label}</label>
				</div>
			);
		};

		return (
			<div className="genresBox">
				{this.props.genres.map(createGenreBox, this)}
			</div>
		);
	}
});

module.exports = GenresList;