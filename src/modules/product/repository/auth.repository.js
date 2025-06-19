const db = require("../../../helpers/db");
const { hash, compare } = require("../../../helpers/hash");

const user = async (email) => {
  return await db.user.findFirst({
    where: {
      email: email,
    },
  });
};

const newUser = async (name, email, password, dob) => {
  const hashed = await hash(password);
  return await db.user.create({
    data: {
      name: name,
      email: email,
      password: hashed,
      dob: new Date(dob),
      role: "READER",
    },
  });
};

const adminRoleAssignment = async (email, role) => {
  return await db.user.update({
    where: {
      email,
    },
    data: {
      role,
    },
  });
};

module.exports = {
  user,
  newUser,
  adminRoleAssignment,
};
