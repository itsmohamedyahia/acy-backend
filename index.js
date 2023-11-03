const express = require("express");
const cors = require("cors");

//db
require("dotenv").config();
const mysql = require("mysql2");
const connection = mysql.createConnection(process.env.DATABASE_URL);

// express and cors
const app = express();
app.use(cors());

// db connect
connection.connect();

app.get("/api/data", (req, res) => {
  connection.query("SELECT * FROM mcq_questions", function (err, rows, fields) {
    if (err) throw err;

    res.send(rows);
  });
});

// routes and spinning
app.get("/api/user/firstName", (req, res) => {
  res.send("Yahia FROM BACKEND BABY");
  res.status(200);
});

app.get("/", (req, res) => {
  res.send("Hello from the Express server!");
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
