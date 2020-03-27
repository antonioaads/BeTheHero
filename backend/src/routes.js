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

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');

const routes = express.Router();

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;