const express = require("express");
const cors = require("cors");
const connection = require("./db").connection;

const app = express();
const router = express.Router();

app.use(cors());

app.use("/api", router);

router.get("/data", (req, res) => {
  connection.query("SELECT * FROM mcq_questions", function (err, rows, fields) {
    if (err) throw err;

    res.send(rows);
  });
});

router.get("/user/firstName", (req, res) => {
  res.send("Yahia FROM BACKEND BABY");
  res.status(200);
});

app.get("/", (req, res) => {
  res.send("Hello from the Express server!");
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
