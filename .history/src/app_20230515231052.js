const express = require("express");
const morgan = require("morgan");
const expressHandlebars = require("express-handlebars");
const handlebars = expressHandlebars.create();
const app = express();
const path = require("path");
const port = 4000;

const route = require('./routes');
// img
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
