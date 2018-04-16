// require in your controllers, if we have multiple controllers we require all of them!
var mainroutes = require('./../controllers/users.js');
var path = require('path');

// routing exports a function that takes app
module.exports = function(app){

    app.get('/all', function(req, res){
        mainroutes.getAll(req, res);
    })

    app.get('task/:id', function(req, res){
        mainroutes.getTask(req, res);
    })

    app.post('/', function(req, res){
        mainroutes.addTask(req, res);
    })

    app.delete('/delete/:id', function(req, res){
        console.log("pass delete id in routes", req.params.id);
        mainroutes.deleteTask(req, res);
    })

    app.put('/edit/:id', function(req, res){
        console.log("4444", req.body.detail);
        mainroutes.editTask(req, res);
    })



  
    app.all("*", (req, res, next) => {
        res.sendFile(path.resolve("./client/dist/index.html"))
    });

};