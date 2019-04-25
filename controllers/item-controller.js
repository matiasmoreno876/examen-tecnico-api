'use strict'

var apiMeli = require('../services/api-meli-service');
var listItemResponseDto = require('../dtos/listItem-response-dto');
var itemWithDescriptionResponseDto = require('../dtos/itemWithDescription-response-dto');

module.exports = {
    getItems,
    getItemWithDescription
};

function getItems(req, res) {
    var query = req.query.q;

    apiMeli.getItems(query)
        .then(function (data) {
            if (data.results.length === 0) {
                res.status(204).send({message: 'No hay publicaciones que coincidan con tu búsqueda.'});
            } else {
                res.status(200).send(listItemResponseDto.from(data));
            }
        })
        .catch(function (err) {
            res.status(400).send({message: err});
        })
}

function getItemWithDescription(req, res) {
    var idItem = req.params.id;
    apiMeli.getItem(idItem)
        .then(function (item) {

            apiMeli.getDescription(idItem)
                .then(function (description) {
                    var itemWithDescriptionResponse = itemWithDescriptionResponseDto.from(item, description);
                    res.status(200).send(itemWithDescriptionResponse);
                })
                .catch(function (err) {
                    res.status(400).send({message: err});
                })
        })
        .catch(function (err) {
            res.status(400).send({message: err});
        })
}
