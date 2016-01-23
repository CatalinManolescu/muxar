/**
 *
 * @author Catalin Manolescu <cc.manolescu@gmail.com>
 */
var restify = require('restify');
fs = require('fs');

var config = {
    port: process.env.NPM_PACKAGE_CONFIG_PORT,
    path: {
        'public': __dirname + '/../web/public' 
    }
};


var server = restify.createServer({
    name: 'MUXar'
});

server.get('/api/.*', function(req, res){
    console.log('api request');
    res.send('OK.');
});

server.get('/.*', restify.serveStatic({
    directory: config.path.public,
    'default': 'index.html'
}));

server.listen(process.env.NPM_PACKAGE_CONFIG_PORT, function() {
    console.log('Server started on port: ' + process.env.NPM_PACKAGE_CONFIG_PORT);
});

console.log('app config: ', config);

module.exports = server;
