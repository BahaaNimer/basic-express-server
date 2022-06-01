'use strict';
function validator() {
  return (req, res, next) => {
    let name = req.params.name;
    if (typeof name === 'string' && name.length > 0) {
      next();
    } else {
      res.status(500).send({
        code: 500,
        route: req.path,
        message: "Internal Server Error",
      });
    }
  };
}

module.exports = validator;