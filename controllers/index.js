const { getProductsBD } = require('../models')

function getProducts(req, res){
  const rpta = getProductsBD();
  res.json({
    rpta
  });
}

module.exports = { getProducts }