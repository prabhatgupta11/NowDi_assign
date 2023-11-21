const express = require("express");
const { connection } = require("./db");
const userrouter= require("./route/routes");
const app = express();
require("dotenv").config();
app.use(express.json());

//welcome route

// app.use("/", (req, res) => {
//   try {
//     res.status(501).json("Welcome To my page ");
//   } catch (err) {
//     res.status(501).json("Welcome route is not working");
//   }
// });

//All routes
app.use(userrouter);

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("Connected to database");
  } catch (err) {
    console.log(err, message);
  }
  console.log(`Server is running at ${process.env.PORT}`);
});
