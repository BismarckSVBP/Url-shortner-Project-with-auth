const User = require("../models/signup");

async function handleSignUp(req, res) {
  const { username, emailID, password } = req.body;

  if (!username | !emailID | !password) {
    return res.status(400).json({ Error: "All field are required" });
  } else {
    const user = await User.findOne({ username, emailID, password });
    if (!user) {
      await User.create({
        username,
        emailID,
        password,
      })
      return res.redirect("/user/login");
      // return res.json({ msg: "Sign-Up Succesfully" });
    } else {
      return res.json({ msg: "You are already Sign-Up" });
    }
  }
}

module.exports = {
  handleSignUp,
};
