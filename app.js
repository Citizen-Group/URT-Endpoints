/**
 * Universal Reporting Tool: Endpoint Template 
 * 
 * This project provides the template and validation for creating a URT Endpoint.
 * 
 * See: https://github.com/Citizen-Group/URT-Endpoints
 */
var fs = require('fs');

// Include model files
fs.readdirSync(__dirname + '/').forEach(function(filename) {
    if (~filename.indexOf('.js')) {
       console.log(__dirname + '/' + filename);
    } 
});