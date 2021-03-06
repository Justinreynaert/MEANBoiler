// app/routes.js

//grab the nerd model we just created

var Nerd = require('./models/nerd');
var path = require('path');

module.exports = function(app) {
    // server routes =====
    // handle things like api calls
    // authentication routes

    //sample api route

    app.get('api/nerds', function(req,res) {
        Nerd.find(function(err, nerds) {
            //if there is an error retrieving send the error

            if (err) {
                res.send(err)
            }
            res.json(nerds);// return all nerds in json format
        });
    });

    //route to handle creating goes here (app.post)
    //route to handle delete goes here (app.delete)

    //frontend routes ================
    //route to handle all anguler requests

    app.get('*', function(req,res) {
        res.sendFile(path.join(__dirname, '../public', 'index.html')); // load our public/index.html file
    })

};