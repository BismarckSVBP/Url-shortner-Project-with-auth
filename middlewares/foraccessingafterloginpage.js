const { getUser } = require("../service/foraccessingafterloginpage");

async function restrictToLoggedinUserOnly(req, res, next) {
  const userUid = req.cookies?.uid;

  if (!userUid) return res.redirect("/user/login");
  const user = getUser(userUid);

  if (!user) return res.redirect("/user/login");

  req.user = user;
  next();
}


async function checkAuth(req, res, next) {
  const userUid = req.cookies?.uid;

  const user = getUser(userUid);

  req.user = user;
  next();
}

module.exports = {
  restrictToLoggedinUserOnly,
  checkAuth
 
};
