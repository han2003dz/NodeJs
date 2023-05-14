const express = require("express");
const morgan = require("morgan");
const ex
const app = express();
app.use(morgan('combined'))
const port = 4000;
app.get("/", (req, res) => {
  res.send("Hello My project NodeJs!");
});
// 127.0.0.1 - localhost
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
