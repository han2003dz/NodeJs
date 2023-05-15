const express = require("express");
const morgan = require("morgan");
const expressHandlebars = require("express-handlebars");
const handlebars = expressHandlebars.create();
const app = express();
const path = require("path");
const port = 4000;

// img
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());
app.use(express.json());
// http logger
app.use(morgan("combined"));

// template engine
app.engine("handlebars", handlebars.engine);
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "resources/views"));
app.get("/", (req, res) => {
  res.render("home");
});
app.get("/news", (req, res) => {
  res.render("news");
});

app.get("/search", (req, res) => {
  console.log(req.query.q);
  res.render("search");
});
app.post("/search", (req, res) => {
  console.log(req.body); // 
  res.send("");
});
// 127.0.0.1 - localhost
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
