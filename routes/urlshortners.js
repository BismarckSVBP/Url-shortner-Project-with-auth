const express = require("express");
const URL = require("../models/url");
const router = express.Router();

router.get("/", async (req, res) => {
    return res.render("urlshortner");
});
// router.get("/", async (req, res) => {
//     const allUrls = await URL.find({});
//     return res.render("urlshortner",{
//       urls : allUrls,
  
//     });
// });

module.exports = router;