'use strict';

var Nestling = require('../lib');
var nest = new Nestling.NestStreaming();
var token = 'your_token';
var house = 'your_structure_id';
var thermostat = 'your_thermostat_id';


nest.on('error', function(err) {
  console.error('ERROR: ' + err);
});


nest.on('initialized', function(data) {
  console.log('Initialized');

  nest.updateDevice({
    type: 'thermostats',
    id: thermostat,
    payload: {
      'target_temperature_f': 71
    }
  });
});


nest.on('auth', function(authData) {
  console.log('Authenticated: ' + JSON.stringify(authData, null, 2));
});


nest.on('data', function(data) {
  console.log('Data:');
  // console.log(nest.getStructuresAndDevices());
  // console.log(nest.getDevices());
  // console.log(nest.getDevicesByType({type: 'thermostats'}));
  // console.log(nest.getDevice({type: 'thermostats', id: thermostat}));
  // console.log(nest.getStructures());
  // console.log(nest.getStructure({id: house}));
});


nest.auth({token: token});
