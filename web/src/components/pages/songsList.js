"use strict";

var React = require('react');

var SongsList = React.createClass({
	propTypes: {
		songs: React.PropTypes.array.isRequired
	},

	render: function() {
		var createSongsRow = function(song) {
			return (
				<tr key={song.id}>
					<td>{song.title}</td>
					<td>{song.artist_name}</td>
				</tr>
			);
		};

		return (
			<div>
				<table className="table">
					<thead>
						<th>Title</th>
						<th>Artist</th>
					</thead>
					<tbody>
						{this.props.songs.map(createSongsRow, this)}
					</tbody>
				</table>
			</div>
		);
	}
});

module.exports = SongsList;