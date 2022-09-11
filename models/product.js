const { DataTypes } = require('sequelize');
const { connection } = require('../database/db');

const Product = connection.define("product",{
  name : {
    type: DataTypes.STRING
  },
  url_image: {
    type: DataTypes.STRING
  },
  price: {
    type: DataTypes.FLOAT
  },
  discount: {
    type: DataTypes.INTEGER
  },
  category: {
    type: DataTypes.INTEGER
  }
},{
  freezeTableName: true,
  timestamps: false
});

module.exports = { Product }