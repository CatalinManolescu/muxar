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
    console.log('>>>>>>>>>>>>>>>> <<<<<<<<<<<<<<<<<<<<<<<<<<<<');
    console.log('playlist id: ', playlist.id, ' | size: ', playlist.size);
    
    spotify.client.getPlaylistTracks('spotify', playlist.id, {limit: 100, offset: 0}).then(function (data) {
        console.log('got tracks >>>>>>>>>>>>>>>>');
        playlist.tracks = parseTracks(data.body.items);
        if(callback) {
            callback(playlist, null);
        }
    }, function (err) {
        if(callback) {
            callback(null, err);
        }
    });
};



var featuredPlaylists = function(req, res, next) {
    var limit = req.params.limit ? req.params.limit : 10;
    var single = req.params.single;
    spotify.requestAccess(function(err){
        if(err) {
            res.send(500,{error:err});
        }
        spotify.client.getFeaturedPlaylists({limit: limit, offset: 0}).then(function (data) {
            if(!single) {
                res.send(parsePlaylists(data.body.playlists.items));
            } else {
                getExtendedPlaylists(data.body.playlists.items, function(result, err){
                    if(err) {
                        res.send(500,{error:err});
                    } else {
                        res.send(result);
                    }
                });
            }
        }, function (err) {
            res.send(500,{error:err});
        });
    });
    
    return next();
};

var playlistTracks = function(req, res, next) {
    var limit = req.params.limit ? req.params.limit : 10;
    var playlistId = req.params.playlist;
    spotify.requestAccess(function(err) {
        if (err) {
            res.send(500, {error: err});
        }
        spotify.client.getPlaylistTracks('spotify', playlistId, {limit: limit, offset: 0}).then(function (data) {
            res.send(parseTracks(data.body.items));
        }, function (err) {
            res.send(500,{error:err});
        });
    });
    
    return next();
};







module.exports.featured = featuredPlaylists;
module.exports.tracks = playlistTracks;
