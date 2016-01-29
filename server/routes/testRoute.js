/**
 *
 * @author Catalin Manolescu <cc.manolescu@gmail.com>
 */

var spotify = require('./../clients/spotifyClient');
var spot = function (req, res, next) {
    spotify.requestAccess(function(err){
        if (err) {
            res.send(err);
        } else {
            spotify.test();
            res.send('ok');
        }
    });
    return next();
};

module.exports.spot = spot;
