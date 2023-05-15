function route(app) {
  app.use(express.static(path.join(__dirname, "public")));
  app.use(
    express.urlencoded({
      extended: true,
    })
  );
  app.use(express.json());
  // http logger
  app.use(morgan("combined"));

  // template engine

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
    console.log(req.body); // .body.q-.gender
    res.send("");
  });
}

module.exports = route;
