'use strict'

function testConexion(req, res) {
    res.status(200).send({message: 'Prueba de conexión OK.'});
}

module.exports = {
    testConexion
};
