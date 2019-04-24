'use strict'

var app = require('./app');
var port = process.env.PORT || 4201;

app.listen(port, function () {
   console.log("Servidor del API Rest con NodeJS para el examen técnico front-end Meli corriendo en http://localhost:" + port + "/api/v1/");
});


