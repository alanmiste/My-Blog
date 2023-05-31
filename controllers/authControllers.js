const userLogin = (req, res) => {
  res.render("auth/login", { title: "Login" });
};

const userLoginPost = (req, res) => {};

const userRegister = (req, res) => {
  res.render("auth/register", { title: "Register" });
};

const userRegisterPost = (req, res) => {};

module.exports = {
  userLogin,
  userLoginPost,
  userRegister,
  userRegisterPost,
};
