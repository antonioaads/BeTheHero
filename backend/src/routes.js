/* 
* Métodos HTTP:
*
* GET: Buscar uma informação do backend
* POST: Criar uma informação no backend
* PUT: Alterar uma informação do backend
* DELETE: Deletar uma informação do backend
*/


/*
* Tipos de parâmetros
*
* Query Params: Parâmetros nomeados enviados na rota após o símbolo de ? (Filtros, paginação)
* Route Params: Parâmetros utilizados para identificar recursos
* Request Body: Corpo da requisição utilizado para criar ou alterar recursos 
*/

const express = require('express');
const crypto = require('crypto');

const connection = require('./database/connection');

const routes = express.Router();

routes.post('/ongs', (request, response) => {
    const { name, email, whatsapp, city, uf } = request.body;

    const id = crypto.randomBytes(4).toString('HEX');
    
    connection('ongs').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf
    });

    return response.json();
});

module.exports = routes;