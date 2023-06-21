const mongoose = require("mongoose");
// console.log('in index before - app = require("./app");');
const app = require("./app");
// console.log('in index after - app = require("./app");');
const dotenv = require('dotenv/config')
var server;

// connect nodejs to mongodb database
mongoose
  .connect(process.env.DB_CONNECTION)
  .then((res) => {
    console.log("mongodb connected successfully !!!");
    server = app.listen((process.env.PORT_NO), () => {
<<<<<<< HEAD
      console.log(`\nServer Started Successfully on port!!! ${process.env.PORT_NO}`);
=======
>>>>>>> 92fd1df0ead420b6684e065d8ad06d2fa7560410
    });
    
    if(server)
    console.log(`\nServer Started Successfully on port!!! ${process.env.PORT_NO}`);
    else
      console.log('server not started');
  })
  .catch((err) => console.log({message : err.message}) );

// Manually close the server if an unhandled exception occurs
// if unhandeled exception occurs then automatically server will close

const exitHandler = () => {
  if (server) {
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
