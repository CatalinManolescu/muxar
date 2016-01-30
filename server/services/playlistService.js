/**
 *
 * @author Catalin Manolescu <cc.manolescu@gmail.com>
 */



var spotify = require('./../clients/spotifyClient');









var getImage = function (images) {
    if (images) {
        for (var i = 0; i < images.length; i++) {
            var image = images[i];
            if (image.width > 200 && image.width < 400) {
                return image;
            }
        }
    }

    return null;
};


var parsePlaylists = function(playlists) {
    var result = [];
    var playlist;
    var size = playlists.length;
    for(var index = 0; index < size; index++) {
        var item = playlists[index];
        playlist = {};
        result[index] = playlist;

        playlist.id = item.id;
        playlist.spotifyId = item.id;
        playlist.name = item.name;
        playlist.size = item.tracks.total;
        playlist.image = getImage(item.images);
    }

    return result;
};

var parseTracks = function(tracks) {
    var result = [];
    var track;
    var size = tracks.length;
    for(var index = 0; index < size; index++) {
        var item = tracks[index];
        track = {};
        result[index] = track;

        track.id = item.track.id;
        track.spotifyId = item.track.id;
        track.name = item.track.name;
        track.popularity = item.track.popularity;
        track.track_number = item.track.track_number;
        track.duration_ms = item.track.duration_ms;
        track.external_ids = item.track.external_ids;

        track.album = {
            id: item.track.album.id,
            spotifyId: item.track.album.id,
            name: item.track.album.name,
            image: getImage(item.track.album.images)
        };

        track.artists = [];

        if (item.track.artists) {
            for (var j = 0; j < item.track.artists.length; j++) {
                var artist = item.track.artists[j];

                track.artists[j] = {
                    id: artist.id,
                    spotifyId: artist.id,
                    name: artist.name
                }
            }
        }
    }

    return result;
};

var getExtendedPlaylists = function(playlists, callback) {
    var surpizeIndex = Math.floor(Math.random() * (playlists.length + 1));
    console.log('index: ' + surpizeIndex);

    var playlist = parsePlaylists([playlists[surpizeIndex]])[0];

    spotify.client.getPlaylistTracks('spotify', playlist.id, {limit: 100, offset: 0}).then(function (data) {
        playlist.tracks = parseTracks(data.body.items);
        if(callback) {
            callback(null, playlist);
        }
    }, function (err) {
        if(callback) {
            callback(err, null);
        }
    });
};

var playlistTracks = function(playlistId, limit, offset, callback) {
    function doCallback(err, res) {
        if(callback) {
            callback(err,res);
        }
    }
    
    spotify.requestAccess(function(err) {
        if (err) {
            doCallback(err);
            return;
        }
        spotify.client.getPlaylistTracks('spotify', playlistId, {limit: limit, offset: 0}).then(function (data) {
            doCallback(null, parseTracks(data.body.items));
        }, function (err) {
            doCallback(err);
        });
    });
};

var featuredPlaylists = function(singleResult, limit, offset, callback) {
    
    function doCallback(err, res) {
        if(callback) {
            callback(err,res);
        }
    }
    
    spotify.requestAccess(function(err){
        if(err) {
            doCallback(err);
            return;
        }
        
        spotify.client.getFeaturedPlaylists({limit: limit, offset: offset}).then(function (data) {
            if(!singleResult) {
                doCallback(null, parsePlaylists(data.body.playlists.items));
            } else {
                getExtendedPlaylists(data.body.playlists.items, function(err, result){
                    doCallback(err, result);
                });
            }
        }, function (err) {
            doCallback(err);
        });
    });
};



module.exports.featuredPlaylists = featuredPlaylists;
module.exports.playlistTracks = playlistTracks;
