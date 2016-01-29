/**
 *
 * @author Catalin Manolescu <cc.manolescu@gmail.com>
 */
  
var restify = require('restify');

var authenticationManager = function() {
    var authenticationProvider = function(req, res, next){
        res.header('WWW-Authenticate','Basic realm="proxy"');
        
        if (!req.authorization || !req.authorization.basic || !req.authorization.basic.password) {
            return next(new restify.errors.UnauthorizedError('We don\'t know you !'));
        }

        checkUserPassword(req.authorization.basic.username, req.authorization.basic.password, function(err,data){
            if (err || !data){
                return next(new restify.errors.UnauthorizedError('We don\'t like you !'));
            }
            else return next();
        });
    };
    
    var checkUserPassword = function (userName, password, callback) {
        callback(null, {userName: userName});
    };
    
    return {
        authenticationProvider: authenticationProvider
    }
};

module.exports = authenticationManager();
