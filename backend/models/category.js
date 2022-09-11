const { DataTypes } = require('sequelize');
const { connection } = require('../database/db');

const Category = connection.define("category",{
  name : {
    type: DataTypes.STRING
  },
},{
  freezeTableName: true,
  timestamps: false
});

module.exports = { Category }