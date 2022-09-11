const express = require('express');
const api = express.Router();
const controller = require('../controllers');

api.get('/getProducts',controller.getProducts);

module.exports = { api }