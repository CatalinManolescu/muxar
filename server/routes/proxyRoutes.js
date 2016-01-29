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
    var url = config.base_url + 'api/Artists/Search?artistLabel=' + req.query.name + '&limit=' + limit;
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

var searchArtistsByGenre = function(req, res, next) {
    var limit = req.params.limit ? req.params.limit : 10;
    var genres = JSON.parse(req.query.genres);
    var url = config.base_url + 'api/Artists/SearchByGenres?limit=' + limit;
    request.post(url,{
        json: genres
    }, function (error, response, body) {
        if (error) {
            res.send(500,{error:error});
        } else {
            res.send(body);
        }
    });

    return next();
};

var searchArtists = function(req, res, next) {
    var limit = req.params.limit ? req.params.limit : 10;
    console.log('query: ', req.query);
    if (req.query.genres) {
        return searchArtistsByGenre(req,res,next);
    } else if (req.query.name) {
        return searchArtistsByName(req,res,next);
    }

    return next();
};


var getArtistByName = function(req, res, next) {
    var limit = req.params.limit ? req.params.limit : 10;
    var url = config.base_url + 'api/Artists/SearchDetails?artistName=' + req.params.artist + '&limit=' + limit;
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
    var url = config.base_url + 'api/Genres/GetByArtist?artistLabel=' + req.params.artist + '&limit=' + limit;
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




module.exports.searchArtists = searchArtists;
module.exports.getArtistByName = getArtistByName;
module.exports.searchGenresByArtist = searchGenresByArtist;
