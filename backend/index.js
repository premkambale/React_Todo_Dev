const mongoose = require("mongoose");
const app = require("./app");
const dotenv = require("dotenv/config");
var server;

// connect nodejs to mongodb database
mongoose
  .connect(process.env.DB_CONNECTION)
  .then((res) => {
    console.log(
      "----------------------------------------------------------------"
    );
    console.log("mongodb connected successfully !!!");
    
    server = app.listen(process.env.PORT_NO, () => {});   // start the server

    if (server) {
      console.log(
        `Server Started Successfully on port!!! ${process.env.PORT_NO}`
      );
      console.log(
        "----------------------------------------------------------------"
      );
    } else console.log("server not started");
  })
  .catch((err) => console.log({ message: err.message }));

// Manually close the server if an unhandled exception occurs
// if unhandeled exception occurs then automatically server will close

const exitHandler = () => {
  if (server) {       // if server is started then firstly close the server
    server.close(() => {
      console.warn("Server closed");
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
};

const unexpectedErrorHandler = (error) => {
  console.error(error);
  exitHandler();
};

// Listen to unhandled exceptions and call handler when such exceptions occur
process.on("uncaughtException", unexpectedErrorHandler);
process.on("unhandledRejection", unexpectedErrorHandler);
