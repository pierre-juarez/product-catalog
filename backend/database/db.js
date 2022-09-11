const { Sequelize } = require('sequelize');

// Credentials for connecting to the database
const connection = new Sequelize('bsale_test', 'bsale_test', 'bsale_test', {
  host: 'mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com',
  dialect: 'mysql'
});

module.exports = { connection }