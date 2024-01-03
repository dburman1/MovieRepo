const express = require("express");
const routes = require('./src/routes/router');
const cors = require('cors');
const PORT = 5000;
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use('/', routes);
require('dotenv').config();
var server = app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

module.exports = server;