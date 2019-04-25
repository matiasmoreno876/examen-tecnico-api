'use strict'
var request = require('request');
const MELI_END_POINT_GET_ITEMS = 'https://api.mercadolibre.com/sites/MLA/search?q=' + 'fiat uno 2002';

module.exports = {
    getItems
};

function getItems() {
    return new Promise(function (done, reject) {
        request(MELI_END_POINT_GET_ITEMS, function (err, response, body) {
            if(response.statusCode == 200){
                var data = JSON.parse(body)
                done(data);
            }else{
                reject('Hubo un error al consultar la API de Meli')
            }
        })
    })
}
