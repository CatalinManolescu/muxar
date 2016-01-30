/**
 *
 * @author Catalin Manolescu <cc.manolescu@gmail.com>
 */

var playlistService = require('./../services/playlistService');



var featuredPlaylists = function(req, res, next) {
    var limit = req.params.limit ? req.params.limit : 10;
    var single = req.params.single;
    var offset = req.params.offset >= 0 ? req.params.offset : 0;
    
    playlistService.featuredPlaylists(single, limit, offset, function(err, result){
        if(err) {
            res.send(500,{error:err});
        } else {
            res.send(result);
        }
    });
    
    return next();
};

var playlistTracks = function(req, res, next) {
    var limit = req.params.limit ? req.params.limit : 10;
    var offset = req.params.offset >= 0 ? req.params.offset : 0;
    var playlistId = req.params.playlist;
    playlistService.playlistTracks(playlistId, limit, offset, function(err, result){
        if(err) {
            res.send(500, {error: err});
        } else {
            res.send(result);
        }
    });
    
    return next();
};


module.exports.featured = featuredPlaylists;
module.exports.tracks = playlistTracks;
