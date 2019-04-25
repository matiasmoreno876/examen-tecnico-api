'use strict'

var express = require('express');
var itemController = require('../controllers/item-controller');
var api = express.Router();

api.get('/items', itemController.getItems);
api.get('/items/:id', itemController.getItemWithDescription);


module.exports = api;
