const express = require("express");
const cors = require("cors");
const fs = require("fs");
const errorHandler = require("./middleware/middleware");
const userRoute = require("./routers/v1/user.route");

const app = express();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(errorHandler);

// routes
app.use("/api/v1/users", userRoute);

app.get("/", (req, res) => {
  res.send("Welcome to Server");
});

app.all("*", (req, res) => {
  res.send("No result found");
});

app.listen(port, () => {
  console.log(`Server Running port ${port}`);
});

// global error handler

process.on("unhandledRejection", (error) => {
  console.log(error.name, error.message);
  app.close(() => {
    process.exit(1);
  });
});
