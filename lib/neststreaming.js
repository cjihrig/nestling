'use strict';

var Util = require('util');
var EventEmitter = require('events').EventEmitter;
var Firebase = require('firebase');
var host = 'wss://developer-api.nest.com';


function NestStreaming() {
  EventEmitter.call(this);

  var self = this;

  self._ref = new Firebase(host);
  self._snapshot = null;
  self._data = null;
  self._initialized = false;

  self._ref.on('value', function(snapshot) {
    if (snapshot.exists()) {
      self._snapshot = snapshot;
      self._data = snapshot.val();

      if (self._initialized === false) {
        self._initialized = true;
        self.emit('initialized', self._data);
      }

      self.emit('data', self._data);
    }
  });
}

Util.inherits(NestStreaming, EventEmitter);
module.exports = NestStreaming;


NestStreaming.prototype.auth = function(options) {
  var self = this;

  self._ref.authWithCustomToken(options.token, function(err, authData) {
    if (err) {
      return self.emit('error', err);
    }

    self.emit('auth', authData);
  });
};


NestStreaming.prototype.getStructuresAndDevices = function() {
  return this._data;
};


NestStreaming.prototype.getDevices = function() {
  return this.getValue('devices');
};


NestStreaming.prototype.getDevicesByType = function(options) {
  return this.getValue('devices/' + options.type);
};


NestStreaming.prototype.getDevice = function(options) {
  return this.getValue('devices/' + options.type + '/' + options.id);
};


NestStreaming.prototype.updateDevice = function(options) {
  this.setValue('devices/' + options.type + '/' + options.id, options.payload);
};


NestStreaming.prototype.getStructures = function() {
  return this.getValue('structures');
};


NestStreaming.prototype.getStructure = function(options) {
  return this.getValue('structures/' + options.id);
};


NestStreaming.prototype.updateStructure = function(options) {
  this.setValue('structures/' + options.id, options.payload);
};


NestStreaming.prototype.getValue = function(path) {
  if (this._snapshot === null)
    return null;

  return this._snapshot.child(path).val();
};


NestStreaming.prototype.setValue = function(path, payload) {
  var self = this;

  self._ref.child(path).set(payload, function(err) {
    if (err) {
      self.emit('error', err);
    }

    self.emit('update', path, payload);
  });
};
