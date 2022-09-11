const express = require('express');
const {json, urlencoded} = require('body-parser')
const PORT = process.env.PORT || 3000;

const app = express();
app.use(json());
app.use(urlencoded({ extended: true }));

app.listen(PORT,() => {
  console.log('Server running to port:'+ PORT);
});


