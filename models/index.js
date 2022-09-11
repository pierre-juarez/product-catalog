const { Category } = require("./category");

async function getCategoriesBD(){
  try {
    const result = await Category.findAll();
    return result;
  } catch (error) {
    throw new Error(error);
  }
}

function getProductsBD(){
  return{
    msg: "Mensaje desde el model"
  }
}



module.exports = { getProductsBD, getCategoriesBD }