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
					<td className="songCell">{song.title}</td>
					<td className="songCelltwo">{song.artist_name}</td>
				</tr>
			);
		};

		return (
			<div>
				<table >
					<thead>
						<th className="songCell m">Title</th>
						<th className="songCelltwo">Artist</th>
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