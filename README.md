# nestling

[![Current Version](https://img.shields.io/npm/v/nestling.svg)](https://www.npmjs.org/package/nestling)
[![Build Status via Travis CI](https://travis-ci.org/continuationlabs/nestling.svg?branch=master)](https://travis-ci.org/continuationlabs/nestling)
![Dependencies](http://img.shields.io/david/continuationlabs/nestling.svg)
![devDependencies](http://img.shields.io/david/dev/continuationlabs/nestling.svg)

**This is still a work in progress.**

A [Nest](http://www.nest.com) API wrapper. See the official [API reference](https://developer.nest.com/documentation/api-reference) for a description of the various fields in the responses.

## Basic Usage

## Methods

### `getStructuresAndDevices(options, callback)`

  - Arguments
    - `options` (object) - Configuration object supporting the following properties.
      - `token` (string) - Authentication token used to access the Nest.
    - `callback` (function) - Callback function with the following arguments.
      - `error` (error) - If an error occurs, this argument is populated with an error object.
      - `payload` (object) - The response payload received from the Nest.

Retrieve data on all structures and devices associated with the authenticated account.

### `getDevices(options, callback)`

  - Arguments
    - `options` (object) - Configuration object supporting the following properties.
      - `token` (string) - Authentication token used to access the Nest.
    - `callback` (function) - Callback function with the following arguments.
      - `error` (error) - If an error occurs, this argument is populated with an error object.
      - `payload` (object) - The response payload received from the Nest.

Retrieve data on all devices associated with the authenticated account.

### `getDevicesByType(options, callback)`

  - Arguments
    - `options` (object) - Configuration object supporting the following properties.
      - `token` (string) - Authentication token used to access the Nest.
      - `type` (string) - Device type to retrieve (i.e. `'thermostats'`).
    - `callback` (function) - Callback function with the following arguments.
      - `error` (error) - If an error occurs, this argument is populated with an error object.
      - `payload` (object) - The response payload received from the Nest.

Retrieve data on all devices of a specific type associated with the authenticated account.

### `getDevice(options, callback)`

  - Arguments
    - `options` (object) - Configuration object supporting the following properties.
      - `token` (string) - Authentication token used to access the Nest.
      - `type` (string) - Device type to retrieve (i.e. `'thermostats'`).
      - `id` (string) - Device id.
    - `callback` (function) - Callback function with the following arguments.
      - `error` (error) - If an error occurs, this argument is populated with an error object.
      - `payload` (object) - The response payload received from the Nest.

Retrieve data on an individual device.

### `updateDevice(options, callback)`

  - Arguments
    - `options` (object) - Configuration object supporting the following properties.
      - `token` (string) - Authentication token used to access the Nest.
      - `type` (string) - Device type to retrieve (i.e. `'thermostats'`).
      - `id` (string) - Device id.
      - `payload` (object) - Object containing the keys and values to be updated.
    - `callback` (function) - Callback function with the following arguments.
      - `error` (error) - If an error occurs, this argument is populated with an error object.
      - `payload` (object) - The response payload received from the Nest.

Update data for an individual device.

### `getStructures(options, callback)`

  - Arguments
    - `options` (object) - Configuration object supporting the following properties.
      - `token` (string) - Authentication token used to access the Nest.
    - `callback` (function) - Callback function with the following arguments.
      - `error` (error) - If an error occurs, this argument is populated with an error object.
      - `payload` (object) - The response payload received from the Nest.

Retrieve data on all structures associated with the authenticated account.

### `getStructure(options, callback)`

  - Arguments
    - `options` (object) - Configuration object supporting the following properties.
      - `token` (string) - Authentication token used to access the Nest.
      - `id` (string) - Structure id.
    - `callback` (function) - Callback function with the following arguments.
      - `error` (error) - If an error occurs, this argument is populated with an error object.
      - `payload` (object) - The response payload received from the Nest.

Retrieve data on an individual structure.

### `updateStructure(options, callback)`

  - Arguments
    - `options` (object) - Configuration object supporting the following properties.
      - `token` (string) - Authentication token used to access the Nest.
      - `id` (string) - Structure id.
      - `payload` (object) - Object containing the keys and values to be updated.
    - `callback` (function) - Callback function with the following arguments.
      - `error` (error) - If an error occurs, this argument is populated with an error object.
      - `payload` (object) - The response payload received from the Nest.

Update data for an individual device.
