'use strict';

var Boom = require('boom');
var Hoek = require('hoek');
var Wreck = require('wreck');
var NestStreaming = require('./neststreaming');
var host = 'https://developer-api.nest.com';
var wreckOptions = {
  json: 'force',  // We are only interested in JSON responses
  redirects: 1    // Need to account for 307 redirects in the API
};


module.exports.NestStreaming = NestStreaming;


function handleResponse(callback) {
  return function processResponse(err, response, payload) {
    if (err) {
      return callback(err);
    } else if (response.statusCode !== 200) {
      return callback(Boom.create(response.statusCode));
    }

    callback(null, payload);
  };
}


module.exports.getStructuresAndDevices = function(options, callback) {
  var url = host + '/?auth=' + options.token;

  Wreck.get(url, wreckOptions, handleResponse(callback));
};


module.exports.getDevices = function(options, callback) {
  var url = host + '/devices?auth=' + options.token;

  Wreck.get(url, wreckOptions, handleResponse(callback));
};


module.exports.getDevicesByType = function(options, callback) {
  var url = host + '/devices/' + options.type + '?auth=' + options.token;

  Wreck.get(url, wreckOptions, handleResponse(callback));
};


module.exports.getDevice = function(options, callback) {
  var url = host + '/devices/' + options.type + '/' + options.id +
            '?auth=' + options.token;

  Wreck.get(url, wreckOptions, handleResponse(callback));
};


module.exports.updateDevice = function(options, callback) {
  var url = host + '/devices/' + options.type + '/' + options.id +
            '?auth=' + options.token;
  var settings = Hoek.clone(wreckOptions);

  settings.payload = JSON.stringify(options.payload);
  Wreck.put(url, settings, handleResponse(callback));
};


module.exports.getStructures = function(options, callback) {
  var url = host + '/structures?auth=' + options.token;

  Wreck.get(url, wreckOptions, handleResponse(callback));
};


module.exports.getStructure = function(options, callback) {
  var url = host + '/structures/' + options.id + '?auth=' + options.token;

  Wreck.get(url, wreckOptions, handleResponse(callback));
};


module.exports.updateStructure = function(options, callback) {
  var url = host + '/structures/' + options.id + '?auth=' + options.token;
  var settings = Hoek.clone(wreckOptions);

  settings.payload = JSON.stringify(options.payload);
  Wreck.put(url, settings, handleResponse(callback));
};
