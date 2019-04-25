'use strict'
var request = require('request');
const MELI_END_POINT_GET_ITEMS = 'https://api.mercadolibre.com/sites/MLA/search?q=';
const MELI_END_POINT_ITEM_BY_ID = 'https://api.mercadolibre.com/items/';
// const MELI_END_POINT_ITEM_BY_ID = 'https://api.mercadolibre.com/items/MLA782342706';

module.exports = {
    getItems,
    getItem
};

function getItems(query) {
    return new Promise(function (done, reject) {
        request(MELI_END_POINT_GET_ITEMS + query, function (err, response, body) {
            if (response.statusCode === 200) {
                var data = JSON.parse(body)
                done(data);
            } else {
                reject('Hubo un error al consultar la API de Meli')
            }
        })
    })
}

function getItem(idItem) {
    return new Promise(function (done, reject) {
        request(MELI_END_POINT_ITEM_BY_ID + idItem, function (err, response, body) {

            if (response) {
                if (response.statusCode === 200) {
                    var data = JSON.parse(body);
                    done(data);
                } else {
                    errParse(body, reject);
                }
            } else {
                reject('Hubo un error al consultar la API de Meli');
            }
        })
    })
}

function errParse(body, reject) {
    var err = JSON.parse(body);
    if (body) {
        switch (err.status) {
            case 404: {
                reject(err.message);
                break;
            }
            case 500: {
                reject(err.message);
                break;
            }
            default: {
                reject('Hubo un error al consultar la API de Meli');
            }
        }
    }
}
