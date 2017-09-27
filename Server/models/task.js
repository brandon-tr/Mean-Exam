var mongoose = require('mongoose')

var UserSchema = new mongoose.Schema({
    name:{type:String, required:true},
},{timestamps:true})
var PollSchema = new mongoose.Schema({
    creator:{type:String, required:true},
    question:{type:String, required:true},
    option1:{type:String, required:true},
    option2:{type:String, required:true},
    option3:{type:String, required:true},
    option4:{type:String, required:true},
    votes1:{type:Number, default:0},
    votes2:{type:Number, default:0},
    votes3:{type:Number, default:0},
    votes4:{type:Number, default:0},
    Voters:{type:String},
},{timestamps:true})

mongoose.model('User', UserSchema)
mongoose.model('Poll', PollSchema)