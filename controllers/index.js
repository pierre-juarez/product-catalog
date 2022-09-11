const { getProductsBD, getCategoriesBD } = require('../models')

async function getCategories(req, res){
  try {
    const categories = await getCategoriesBD();
    return res.status(200).json({
      status:"success",
      data: categories
    });
  } catch (error) {
    return res.status(500).json({
      status:"error",
      error
    });
  }
}

function getProducts(req, res){
  const rpta = getProductsBD();
  res.json({
    rpta
  });
}



module.exports = { getProducts, getCategories }