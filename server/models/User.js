// simple model
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// define the schema
var UserSchema = new mongoose.Schema({
    name: {type:String,required:[true,'Task is required'],},
    detail: String
}, {timestamps: true});

// pass the schema and set the model for the entire app
var User = mongoose.model("User", UserSchema);
