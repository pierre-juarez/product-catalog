const { Category } = require("./category");
const { Product } = require("./product");
const { getOffset, getNextPage, getPreviousPage } = require('../helpers');

async function getCategoriesBD(){
  try {
    const result = await Category.findAll();
    return result;
  } catch (error) {
    throw new Error(error);
  }
}

async function getProductsBD(pageSize, pageLimit, search = {}, order = []){
  
  try {
    const limit = parseInt(pageLimit, 10) || 12;
    const page = parseInt(pageSize, 10) || 1;

    let options = {
        offset: getOffset(page, limit),
        limit: limit,
    };

    if (Object.keys(search).length) {
        options = {options, ...search};
    }

    if (order && order.length) {
        options['order'] = [order];
    }

    let { count, rows } = await Product.findAndCountAll(options);

    return {
        previousPage: getPreviousPage(page),
        currentPage: page,
        nextPage: getNextPage(page, limit, count),
        total: count,
        limit: limit,
        data: rows
    }
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = { getProductsBD, getCategoriesBD }