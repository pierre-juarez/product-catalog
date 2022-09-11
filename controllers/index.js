function getProducts(req, res){
  res.json({
    msg: "Mensaje desde el controller"
  });
  
}

module.exports = { getProducts }