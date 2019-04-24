'use strict'

var express = require('express');
var TestController = require('../controllers/test-controller');
var api = express.Router();

api.get('/', TestController.testConexion);

module.exports = api;
