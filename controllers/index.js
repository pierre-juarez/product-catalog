const { getProductsBD, getCategoriesBD } = require('../models');
const { Op } = require('sequelize');

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

async function getProducts(req, res){
  try {
    
    const { 
      text,
      page,
      limit,
      order_by,
      order_direction
    } = req.query;

    let search = {}, order = [];

    if(text){
      search = {
        where: {
          name: {
            [Op.like]: `%${text}%` 
          }
        }
      };
    }

    if(order_by && order_direction){
      order.push(order_by, order_direction);
    }

    const products = await getProductsBD( page, limit, search, order);

    return res.status(200).send({
      status: "success",
      data: products
    });

  } catch (error) {
    return res.status(500).json({
      status: "error",
      error
    });
  }
}



module.exports = { getProducts, getCategories }