'use strict';

var Insync = require('insync');
var Nestling = require('../lib');
var token = 'your_token';
var thermostat = 'your_thermostat_id';


function noop (next) { next(null, {}); }


function getStructuresAndDevices (data, next) {
  Nestling.getStructuresAndDevices({token: token}, function (err, results) {
    if (err) {
      return next(err);
    }

    data.getStructuresAndDevices = results;
    console.log(JSON.stringify(results, null, 2));
    next(null, data);
  });
}


function updateDevice (data, next) {
  Nestling.updateDevice({
    token: token,
    id: thermostat,
    type: 'thermostats',
    payload: {
      'target_temperature_f': 73
    }
  }, function (err, results) {
    if (err) {
      return next(err);
    }

    data.updateDevice = results;
    console.log(JSON.stringify(results, null, 2));
    next(null, data);
  });
}


Insync.waterfall([
  noop,
  getStructuresAndDevices, // Read the initial settings
  updateDevice,            // Change the temperature
  getStructuresAndDevices  // Read the new settings
], function (err, results) {
  console.log(err);
});
