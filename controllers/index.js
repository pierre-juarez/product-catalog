const { getProductsBD, getCategoriesBD } = require('../models')

function getProducts(req, res){
  const rpta = getProductsBD();
  res.json({
    rpta
  });
}

function getCategories(req, res){
  const rpta = getCategoriesBD();
  res.json({
    rpta
  });
}

module.exports = { getProducts, getCategories }