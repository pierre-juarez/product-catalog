const express = require('express');
const api = express.Router();
const controller = require('../controllers');

api.get('/getProducts',controller.getProducts);
api.get('/getCategories', controller.getCategories);

module.exports = { api }