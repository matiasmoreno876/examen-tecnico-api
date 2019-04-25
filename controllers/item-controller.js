'use strict'

var ApiMeli = require('../services/api-meli-service');
var ListItemResponseDto = require('../dtos/list-item-response-dto');

module.exports = {
    getItems
};

function getItems(req, res) {
    ApiMeli.getItems()
        .then(function (data) {

            // res.status(200).send(data);
            res.status(200).send(ListItemResponseDto.from(data));
        })
        .catch(function (err) {
            res.status(400).send({message: err});
        })
}
