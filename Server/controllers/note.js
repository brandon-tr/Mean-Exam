var mongoose = require('mongoose')
var User = mongoose.model('User')
var Poll = mongoose.model('Poll')

module.exports = {
    register: function(req, res) {
        var user = User(req.body);
        user.save(function(err) {
            console.log(err)
        })
    },
    createPoll: function(req, res) {
        var poll = Poll(req.body);
        poll.save(function(err) {
            console.log(err)
        })
    },
    display: function(req, res) {
        Poll.find({}, function(err, polls) {
            console.log(polls)
            res.json(polls);
        })
    },
    findPoll: function(req, res) {
        Poll.findOne({_id:req.body.id}, function(err, user) {
            res.json(user)
        })
    },
    vote: function(req, res) {
        if(req.body.name === "votes1"){
            Poll.findByIdAndUpdate(req.body.id, {$inc: {votes1:1}}, function (err, data) {
                res.json(data)
            });
        }else if(req.body.name === "votes2") {
            Poll.findByIdAndUpdate(req.body.id, {$inc: {votes2:1}}, function (err, data) {
                res.json(data)
            });
        }else if(req.body.name === "votes3") {
            Poll.findByIdAndUpdate(req.body.id, {$inc: {votes3:1}}, function (err, data) {
                res.json(data)
            });
        }
        else if(req.body.name === "votes4") {
            Poll.findByIdAndUpdate(req.body.id, {$inc: {votes4:1}}, function (err, data) {
                res.json(data)
            });
        }
    },
    delete: function(req, res) {
        console.log('here')
        console.log(req.body.id)
        Poll.findOneAndRemove({_id:req.body.id}, function(err, data){
            
        })
    }
}