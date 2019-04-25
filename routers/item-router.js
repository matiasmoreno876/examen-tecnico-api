'use strict'

var express = require('express');
var ItemController = require('../controllers/item-controller');
var api = express.Router();

api.get('/items', ItemController.getItems);

module.exports = api;
