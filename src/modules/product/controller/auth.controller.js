const authService = require("../service/auth.service");

const register = async (req, res) => {
  try {
    const { name, email, password, dob } = req.body;

    const user = await authService.register({ name, email, password, dob });
    // res.json(user);

    // return res.json({ newUser }).status(201);
    return res.status(201).json(user);
  } catch (error) {
    console.log(error);
    return res.json({ error: "internal Server Error" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password} = req.body;

    const {user, token} = await authService.login({ email, password });
  
    return res.status(200).json(user);
    
  } catch (error) {
    console.log(error);
    return res.json({ error: "internal Server Error" });
  }
};

module.exports = {
  register,
  login,
};
