const express = require('express')
const mongose = require('mongoose')
const routes = require('./routes')

const app = express();
mongose.connect('mongodb://localhost:27017/week-10', {useNewUrlParser: true})
app.use(express.json());
app.use(routes)

//Metodos:
//get, post, put, delete

//Tipos de parametros: 
//Query Params: request.query (Filtros, ordenacao, paginacao, ...)  
//Route Params: request.params (Identificaar um recurso na alteracao ou remocao)
//Body: request.body (Dados para criacao ou alteracao de um registro)

//MongoDB (Nao-relacional)


app.listen(3333);