/**
 *
 * @author Catalin Manolescu <cc.manolescu@gmail.com>
 */
var restify = require('restify');
fs = require('fs');
var RDFLocal = require('./clients/RDFLocal');
var authenticationManager = require('./controllers/authenticationManager');

var rdfRoutes = require('./routes/rdfRoutes');
var genreRoutes = require('./routes/genreRoutes');


if(!String.prototype.startsWith){
    String.prototype.startsWith = function (str) {
        return !this.indexOf(str);
    }
}

var config = {
    port: process.env.NPM_PACKAGE_CONFIG_PORT,
    applicationName: process.env.NPM_PACKAGE_NAME,
    path: {
        'public': __dirname + '/../web/public' 
    }
};

//console.log(process.cwd());

var routes = {}, 
    routes_path = __dirname + '/routes';
fs.readdirSync(routes_path).forEach(function (file) {
    if (file.indexOf('.js') != -1) {
        routes[file.split('.')[0]] = require(routes_path + '/' + file)
    }
});

var server = restify.createServer({
    name: config.applicationName
});

server.use(restify.authorizationParser());
server.use(restify.queryParser());
server.use(restify.bodyParser());

server.use(function(req, res, next){
    if (req.url.startsWith('/api')) {
        return authenticationManager.authenticationProvider(req, res, next);        
    } else {
        //res.send(200);
        return next();
    }
});


server.get({name: 'genres', path: '/api/genres'}, genreRoutes.getAllGenres);

server.get({name: 'sparql', path: '/api/sparql'}, rdfRoutes.search);
server.post({name: 'sparql', path: '/api/sparql'}, rdfRoutes.search);
server.get({name: 'rdfinit', path: '/api/rdf/init'}, rdfRoutes.initRDF);

/* test routes */
server.get({name: 'bamby', path: '/api/bamby'}, function(req, res, next){
    res.send('OK.');
    return next();
});

server.get({name: 'bambe', path: '/api/bambe'}, function(req, res, next){
    return next('bamby')
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
