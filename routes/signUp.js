const express = require("express");

const router = express.Router();

router.get("/signup", async (req, res) => {
  
  return res.render("signUp");
});

const { handleSignUp } = require("../controllers/signedup");

router.post("/signuped", handleSignUp);

module.exports = router;
