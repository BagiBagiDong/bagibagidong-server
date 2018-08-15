const User = require('../models/user')

const get = function(req, res){
    User
    .find()
    .then(function(user){
        res
        .status(200)
        .json({
            msg : "belom ada user",
            user : user 
        })
    })
    .catch(function(err){
        res
            .status(400)
            .json({
                msg : err.message
            })
    })
}

const add = function(req,res){
    User
    .create({
        name: req.body.name,
        email: req.body.email,
        password : req.body.password,
    })
    .then(function(user){
        res
        .status(200)
        .json({
            msg : "successfully create user",
            user : user 
        })
    })
    .catch(function(err){
        res
            .status(400)
            .json({
                msg : err.message
            })
    })
}


module.exports = {
    get,
    add,
}