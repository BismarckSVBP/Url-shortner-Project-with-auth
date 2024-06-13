// const sessionIdToUserMap = new Map();
const jwt = require("jsonwebtoken");
const secert = "Aloo@123";
function setUser(user) {
  const payload = {
    
    id: user.username,
    email: user.emailID,
  };
  return jwt.sign(payload, secert);
}

function getUser(token) {
  if (!token) 
    return null;
  
  try {
    return jwt.verify(token, secert);
  } catch (error) {
    return null;
  }
}

module.exports = {
  setUser,
  getUser,
};
