// require mongoose + get User model
var mongoose = require('mongoose');
var User = mongoose.model('User');

// export an object literal
module.exports = {

    // attach methods to our object literal
    getAll: function(req, res){
        User.find({}, function(err, results){
            if(err){
                res.json({message: "Error", error: err})
            }else{
                res.json(results);
            }
        })
    },

    getTask: function(req, res){
        User.findOne({_id: req.params.id}, function(err, pet) {
            if(err){
                res.json({message: "error", error: err});
            }else{
                res.json(pet)
            }
        })
    },

    addTask: function(req, res){
        let newTask = new User(req.body)
        console.log('newTask: ', newTask);
        newTask.save(function(err){
            if(err){
                console.log('err: ', err);
                res.json({message: "error", error:err});
            }else{
                console.log("yes");
                res.json("create successfully")
            }
        })
    },

    deleteTask: function(req, res){
        User.remove({_id:req.params.id},function(err, results){
            if(err){
                res.json({message:"error", error:err});
            }else{
                res.json({message:"Success delete"})
            }
        })
    },

    editTask: function(req, res){
        User.findOneAndUpdate({_id: req.params.id},
        {$set:{name: req.body.name, detail:req.body.detail}},
    null, function(err){
        console.log("5555", req.body.detail, req.body.name);
        if(err){
            console.log('err: ', err);
            
            res.json({message:"error", error:err});
        }else{
            console.log("user.js",req.body.name,req.body.detail);
            res.json({message:"success update"})
        }
    })
    }
}