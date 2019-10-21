// End Point Manager
const fs = require('fs')

exports.load = function(file) {
    console.log('Loading for file ' + file.name);
    read_directory(file.path);
}

exports.unload = function(file) {
    console.log('Unloading for file ' + file.name);
}

exports.export = {};

exports.export.geoJSON = function(file) {
    console.log('Generating GeoJSON for file ' + file.name);
}

exports.export.dataFile = function(file) {
    console.log('Generating DataFile for file ' + file.name);
}

// Util functions

function read_directory() {
    fs.readdirSync(__dirname).forEach(function (filename) {        
        if (~filename.indexOf('.js')) {
          //require(path.join(__dirname, 'models', filename))
        }
      })
}