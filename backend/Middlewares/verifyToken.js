const jwt = require("jsonwebtoken");

// verify customers token
const verifyToken = (req, res, next) => {
  if(req.headers.authorization == undefined)
    return res.status(401).send({message :'user not authorised' })

  const authHeader = req.headers.authorization.split(" ")[1];

  if (authHeader) {
    jwt.verify(authHeader, "task-management", (err, user) => {
      if (err) {
        return res.status(403).send("Invalid token");
      }

      // if (req.url == "/profile" && req.method == "GET" || "PATCH")
       req.user_id = user.id;

      next();
    });
  } else {
    res.send(401).json("user not authorized");
  }
};

module.exports = verifyToken;
