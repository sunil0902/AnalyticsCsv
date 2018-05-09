var config = require('../config.json');
var analyticsJson = require('..'+config.input.josnFileLocation);
var writeToCsv = require('./writeToCsv');
var util = require('util');

var readJsonFile = function(){

    const default_index =0;
    var dimensions = analyticsJson.environments[default_index].dimensions;

    dimensions.forEach(function(dimension){
        // console.log(util.inspect(dimension,false,null));
        var metric = dimension.metrics[default_index];
        // console.log(util.inspect(metric,false,null));
        var row = [dimension.name,metric.values[default_index]];
        // console.log(util.inspect(row,false,null));
        writeToCsv.writer.write(row);

    });
    writeToCsv.writer.end();
    // console.log(util.inspect(analyticsJson,false,null));
}

module.exports.readJsonFile = readJsonFile;