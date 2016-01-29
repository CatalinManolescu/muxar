/**
 *
 * @author Catalin Manolescu <cc.manolescu@gmail.com>
 */

var SpotifyWebApi = require('spotify-web-api-node');

var secrets = {
    clientId: process.env.NPM_PACKAGE_CONFIG_SPOTIFY_CLIENT_ID,
    clientSecret: process.env.NPM_PACKAGE_CONFIG_SPOTIFY_CLIENT_SECRET
};

var spotify = new SpotifyWebApi(secrets);

var requestAccess = function (callBack) {
    spotify.clientCredentialsGrant().then(function(data) {
        // Save the access token so that it's used in future calls
        spotify.setAccessToken(data.body['access_token']);
        if (callBack) {
            callBack();
        }
    }, function(err) {
        console.log('Something went wrong when retrieving an access token', err);
        if (callBack) {
            callBack(err);
        }
    });
};

var test = function() {
    /*spotify.getFeaturedPlaylists({limit: 10, offset: 0}).then(function (data) {
        console.log('---- getFeaturedPlaylists ----');
        console.dir(data.body,{depth:10});
    }, function (err) {
        console.log('Something went wrong when retrieving data : ', err);
    });*/

    /*spotify.getNewReleases({limit: 10, offset: 0}).then(function (data) {
        console.log('---- getNewReleases ----');
        console.dir(data.body,{depth:10});
    }, function (err) {
        console.log('Something went wrong when retrieving data : ', err);
    });*/

    /*spotify.getCategories({limit: 10, offset: 0}).then(function (data) {
        console.log('---- getNewReleases ----');
        console.dir(data.body,{depth:10});
    }, function (err) {
        console.log('Something went wrong when retrieving data : ', err);
    });*/
};

module.exports.requestAccess = requestAccess;
module.exports.test = test;
module.exports.client = spotify;
