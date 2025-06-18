const authRepository = require("../repository/auth.repository");
const bycrypt = require("bcrypt");
const token = require("../../../helpers/jwt");

const register = async ({ name, email, password, dob }) => {
  const user = await authRepository.user(email);
  if (user) {
    // return res.json({ error: "User Already Exists" }).status(400);
    throw new Error("User Already Exists");
  }

  return await authRepository.newUser(name, email, password, dob);
};

const login = async ({ email, password }) => {
  const user = await authRepository.user(email);
  if (!user) {
    // return res.json({ error: "User Already Exists" }).status(400);
    throw new Error("User Does Not Exists");
  }

  // return await authRepository.newUser(name, email, password, dob);
  const compare = await bcrypt.compare(password, user.password);
  if (!compare) {
    throw new Error("Invalid Credentials");
  }

  const token = token({
    id: user.id,
    name: user.name,
    email: user.email,
    password: user.password,
    dob: user.dob,
    role: user.role
  });

  return {token, user};
};

module.exports = {
  register,
  login,
};
