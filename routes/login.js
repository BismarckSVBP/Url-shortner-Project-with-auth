const express = require("express");

const { handleLogin } = require("../controllers/login");
const router = express.Router();



router.get("/login", async (req, res) => {
  return res.render("login");
});

router.post("/logged", handleLogin);
module.exports = router;
