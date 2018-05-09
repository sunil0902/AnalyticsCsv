var csvWriter = require('csv-write-stream');
var fs = require('fs');
var config = require('../config.json');
var writer = csvWriter();

var headers = [config.input.dimensionName, config.input.metric];
var writer = csvWriter({headers : headers});
writer.pipe(fs.createWriteStream(config.output.outputFileLocation+config.output.outputFileName));
module.exports = {
    writer : writer
}