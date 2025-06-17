const bcrypt = require("bcrypt");

const hash = async (originalPassword) => {
  const salt = 10;
  const hashed = await bcrypt.hash(originalPassword, salt);
  return hashed;
};

const compare = async (originalPassword, hashedPassword) => {
  return await bcrypt.compare(originalPassword, hashedPassword);
};

module.exports = {
  hash,
  compare,
};
