const jwt = require("jsonwebtoken");

// verify customers token
const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization.split(" ")[1];

  if (authHeader) {
    jwt.verify(authHeader, "task-management", (err, user) => {
      if (err) {
        return res.status(403).send("Invalid token");
      }
      // console.log(req.route.path);
      // req.id = req.route.path;

      next();
    });
  } else {
    res.send(401).json("user not authorized");
  }
};

module.exports = verifyToken;
