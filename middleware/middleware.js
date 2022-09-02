const errorHandler = (err, req, res, next) => {
  res.sent(err.message);
};

module.exports = errorHandler;
