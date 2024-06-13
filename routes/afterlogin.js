const express = require("express");

const router = express.Router();

router.get("/", async (req, res) => {
  
  return res.render("afterloginpage");
});
// router.get("/afterlogin/post", async(req,res)=>{
//   return res.redirect("expenseui");
// });

module.exports = router;
