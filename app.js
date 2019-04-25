'use strict'

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var testRouter = require('./routers/test-router');
var itemRouter = require('./routers/item-router');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/api', testRouter);
app.use('/api', itemRouter);

module.exports = app;
