'use strict';

const express = require("express");
const validator = require("./middleware/validator");
const logger = require("./middleware/logger");
const notFoundPage = require("./error-handlers/404");
const errorHandler = require("./error-handlers/500");

const app = express();

app.use(logger);
app.get(`/person`, validator(), (req, res) => {
  res.status(200).json({
    name: `${req.query.name}`,
  });
});

app.use('*', notFoundPage);
app.use(errorHandler);

function start(PORT) {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

module.exports = {
  app: app,
  start: start,
};