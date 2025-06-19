const jwt = require("jsonwebtoken");




const applyToken  = (payload) => {
    return jwt.sign(payload, process.env.JWT_SECRET);
}

module.exports = {
    applyToken
}