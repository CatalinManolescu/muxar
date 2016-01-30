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
					<td><img src={song.album.image.url} className="imageCell"/></td>
					<td className="songCell">{song.name}</td>
					<td className="songCelltwo">{song.artists[0].name}</td>
				</tr>
			);
		};

		return (
			<div>
				<table >
					<thead>
						<th className="imageCell"></th>
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