const { Sequelize } = require('sequelize');

// Option 3: Passing parameters separately (other dialects)
const connection = new Sequelize('bsale_test', 'bsale_test', 'bsale_test', {
  host: 'mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com',
  dialect: 'mysql'/* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});

module.exports = { connection }