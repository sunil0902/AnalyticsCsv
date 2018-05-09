var httpRequest = require('./httpRequest');

// replace the hard coded url and other params with confgi.json params
module.exports = function(){
    var options =
    {
        url: "https://mocktarget.apigee.net",
        method: "GET",  
        headers: 
        {
            'Authorization': ''
        }
    };
    httpRequest(options);
};
