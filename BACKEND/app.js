const express = require("express");
const path = require("path");
const bcrypt = require("bcryptjs");
const { connect } = require("./db/conn.js");
const User = require("./models/signup.js");
const { postdata, validate, search, news } = require("./db/controls.js");
const app = express();
const port = process.env.PORT || 3000;
connect();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// const static_path = path.join(__dirname, "../public");
// app.use(express.static(static_path));

// app.get("/", (req, res) => {
//   res.render("index.html");
// });

// app.get("/registration", (req, res) => {
//   res.render("registration.html");
// });

app.post("/registration", postdata);

app.get("/login", (req, res) => {
  res.render("login.html");
});

app.post("/search", search)
app.post("/news", news)
// news()
app.post("/login", validate);

app.listen(80, () => {
  console.log(`connection is running at ${port}`);
});
