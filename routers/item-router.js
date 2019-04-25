'use strict'

var express = require('express');
var ItemController = require('../controllers/item-controller'); //TODO cambiar la ruta por la del controller
var api = express.Router();

api.get('/items', ItemController.getItems);

module.exports = api;
