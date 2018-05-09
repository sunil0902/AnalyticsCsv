var request = require('request');
var fs = require('fs');
var config = require('../config.json');
var util = require('util');

module.exports = function(options){
    
    request(options, function(error, response, body){
            console.log(body);
        // fs.createWriteStream('../'+config.input.josnFileLocation);
    });
};

