const User = require("../models/signup");
const { setUser } = require("../service/foraccessingafterloginpage");
async function handleLogin(req, res) {
  const { username, emailID, password } = req.body;
  if (!username | !emailID | !password) {
    return res.status(400).json({ Error: "All field are required" });
  }
  const user = await User.findOne({ username, emailID, password });
  if (!user) {
    return res.render("login", {
      Error: "Invalid Credentials...",
    });
  }
  const token = setUser(user);
  res.cookie("uid", token);
  return res.redirect("afterloginpage");
  //   return res.redirect("urlshortner");
}

module.exports = {
  handleLogin,
};
