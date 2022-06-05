const User = require('../models/user');


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
    if(req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }
    User.findOne({email : req.body.email}, function(err, user){
        if(err){
            console.log("Error in signing up the user");
            return;
        }

        if(!user){
            User.create(req.body, function(err, user){
                if(err){
                    console.log("Error in signing up the user");
                    return;
                }
                return res.redirect('/users/signin');

            })
        }else{
            return res.redirect('back');
        }



    })

}

module.exports.createSession = function(req, res){
    //TODO later
}