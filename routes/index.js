const express = require('express');
const api = express.Router();

api.get('/getProducts',(req, res) => {
  res.json({
    msg: "Holaaaaaa! "
  });
});


module.exports = { api }