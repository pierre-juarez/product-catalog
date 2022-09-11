const express = require('express');
const {json, urlencoded} = require('body-parser');
const { connection } = require('./database/db');
const PORT = process.env.PORT || 3000;

const app = express();
app.use(json());
app.use(urlencoded({ extended: true }));

(async() => {
  try {
    await connection.authenticate();
    console.log('Connect to database successfully! 🚀');
  } catch (error) {
    throw new Error(error);
  }
})()


app.listen(PORT,() => {
  console.log('Server running to port:'+ PORT);
});


