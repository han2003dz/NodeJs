const newRouter = require('./news');
const siteRouter = require('./site')
function route(app) {


  // template engine

  app.get("/", (req, res) => {
    res.render("home");
  });
  app.use('/news', newRouter);

  app.get("/search", (req, res) => {
    console.log(req.query.q);
    res.render("search");
  });
  app.post("/search", (req, res) => {
    console.log(req.body); // .body.q-.gender
    res.send("");
  });
}

module.exports = route;
