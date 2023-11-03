const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

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
