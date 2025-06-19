const jwt = require("jsonwebtoken");

const applyToken = (payload) => {
  const expiresIn = 60 * 60 * 1;
  return jwt.sign(payload, process.env.JWT_SECRET, {
    espiresIn: expiresIn,
  });
};

const verify = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET);
};

module.exports = {
  applyToken,
  verify,
};
