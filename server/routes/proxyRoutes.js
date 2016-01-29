/**
 *
 * @author Catalin Manolescu <cc.manolescu@gmail.com>
 */

var request = require('request');

var config = {
    base_url: process.env.NPM_PACKAGE_CONFIG_PROXY
};

var searchArtistsByName = function(req, res, next) {
    var limit = req.params.limit ? req.params.limit : 10;
    var url = config.base_url + 'api/Artists/Search?artistLabel=' + req.params.name + '&limit=' + limit;
    request.get({
        url: url
    }, function (error, response, body) {
        if (error) {
            res.send(500,{error:error});
        } else {
            res.send(body);
        }
    });

    return next();
};

var searchGenresByArtist = function(req, res, next) {
    var limit = req.params.limit ? req.params.limit : 10;
    var url = config.base_url + 'api/Genres/GetByArtist?artistLabel=' + req.params.name + '&limit=' + limit;
    request.get({
        url: url
    }, function (error, response, body) {
        if (error) {
            res.send(500,{error:error});
        } else {
            res.send(body);
        }
    });

    return next();
};




module.exports.searchArtistsByName = searchArtistsByName;
module.exports.searchGenresByArtist = searchGenresByArtist;
