const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const connection = require("./db").connection;

const app = express();

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000" // Allowing front-end running port 3000
  })
);

app.get("/data", (req, res) => {
  connection.query("SELECT * FROM mcq_questions", function (err, rows, fields) {
    if (err) throw err;

    res.send(rows);
  });
});

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(bodyParser.json());

app.post("/createUser", (req, res) => {
  console.log(req.body);
  const obj = req.body;
  const email = obj.email;
  const passwd = obj.passwd;
  // res.send(JSON.stringify("SUCCESS"));
  connection.query(
    `INSERT INTO UserCredentials (Email, Password) VALUES ('${email}', '${passwd}')`,
    (err, rows, fields) => {
      if (err) throw err;
      res.send(JSON.stringify("SUCCESS"));
    }
  );
});

app.get("/user/firstName", (req, res) => {
  res.status(200);
  res.send(JSON.stringify("Yahia FROM BACKEND"));
});

app.get("/", (req, res) => {
  res.send("Hello from the Express server!");
});

app.listen(4000, () => {
  console.log("Server listening on port 4000");
});
