const db = require("../models");

exports.register = (req, res, next) => {
  try {
    const user = db.User.create(req.body);
    res.json(user);
  } catch (err) {
    next(err);
  }
};

exports.login = (req, res, next) => {
  try {
  } catch (err) {
    next(err);
  }
};
