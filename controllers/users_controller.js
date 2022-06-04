module.exports.profile = function(req, res){
    return res.render('users', {
        title : "Codeial/Users"
    });
}

module.exports.signup = function(req, res){
    return res.render('signup');
}

module.exports.signin = function(req, res){
    return res.render('signin');
}

module.exports.create = function(req, res){
    //TODO later
}

module.exports.createSession = function(req, res){
    //TODO later
}