'use strict'

var apiMeli = require('../services/api-meli-service');
var listItemResponseDto = require('../dtos/listItem-response-dto');
// var itemWithDetailsResponseDto = require('../dtos/itemWithDetails-response-dto');

module.exports = {
    getItems,
    getItemWithDetails
};

function getItems(req, res) {
    var query = req.query.q;

    apiMeli.getItems(query)
        .then(function (data) {
            if(data.results.length === 0){
                res.status(204).send({message: 'No hay publicaciones que coincidan con tu búsqueda.'});
            }else {
                res.status(200).send(listItemResponseDto.from(data));
            }
        })
        .catch(function (err) {
            res.status(400).send({message: err});
        })
}

function getItemWithDetails(req, res) {
  var idItem = req.params.id;
    apiMeli.getItem(idItem)
        .then(function (data) {
                res.status(200).send(data);
        })
        .catch(function (err) {
            res.status(400).send({message: err});
        })

}
