const authRepository = require("../repository/auth.repository");

const register = async ({ name, email, password, dob }) => {
  const user = await authRepository.user(email);
  if (user) {
    // return res.json({ error: "User Already Exists" }).status(400);
    throw new Error("User Already Exists");
  }

  const newUser = await authRepository.newUser(name, email, password, dob);
  return newUser;
};

module.exports = {
  register,
};
