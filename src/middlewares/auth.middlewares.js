const { verify } = require("../helpers/jwt");

const accessValidation = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      message: "Token diperlukan",
    });
  }

  const token = authorization.split(" ")[1];

  try {
    const jwtDecode = verify(token);
    req.userData = jwtDecode;
    next();
  } catch (error) {
    return res.status(401).json({
      message: "Unathorized",
    });
  }
//   next();
};

const authorization = (...assignedRoles) => {
  return (req, res, next) => {
    if (!assignedRoles.includes(req.userData.role)) {
      return res.status(401).json({
        message: "Akses ditolak",
      });
    }
    next();
  };
};

module.exports = {
  accessValidation,
  authorization,
};
