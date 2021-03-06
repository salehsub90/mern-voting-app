module.exports = {
  ...require("./auth"),
};

module.exports = {
  ...require("./poll"),
};

module.exports.notFound = (req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;

  next(err);
};

module.exports.errors = (err, req, res, next) => {
  res.status(err.status || 400).json({
    message: err.message || "Somthing went wrong!",
  });
};
