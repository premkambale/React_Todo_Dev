const jwt = require("jsonwebtoken");

// verify customers token
const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization.split(" ")[1];

  if (authHeader) {
    jwt.verify(authHeader, "task-management", (err, user) => {
      if (err) return res.status(403).send("Invalid token");

      req.user = user;
      next();
    });
  } else {
    res.send(401).json("user not authorised");
  }
};

module.exports = verifyToken;
