'use strict';
const cors = require('cors');
const express = require('express');

const notFound = require('./errorhandlers/404');
const logger = require('./middleware/logger');
const app = express(); 
app.use(cors());
app.use(express.json());

let people = {
  id: 1,
  name: 'Jackson',
};

app.get('/', (request, response) => {
  try {
    response.status(200).send('Proof of life');
  } catch(e) {
    console.log(e);
  }
});

app.get('/person', logger, (request, response) => {
  response.send(people);
});
// app.get('./*', notFound);

app.use(notFound);

module.exports = app;