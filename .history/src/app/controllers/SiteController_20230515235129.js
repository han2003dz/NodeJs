class SiteController {
  index(req, res) {
    res.render("home");
  }
  search(req, res) {
    res.send("New Details !!");
  }
}
module.exports = new SiteController();
