'use strict';

const express = require("express");
const validator = require("./middleware/validator");
const logger = require("./middleware/logger");
const notFoundPage = require("./error-handlers/404");
const errorHandler = require("./error-handlers/500");

const app = express();

app.use(logger);
app.get(`/person/:name`, validator(), (req, res) => {
  res.json({
    name: `${req.params.name}`,
  });
});

app.use(errorHandler);
app.use(notFoundPage);

function start(PORT) {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

module.exports = {
  app: app,
  start: start,
};