class SiteController {
  index(req, res) {
    res.render("search");
  }
  search(req, res) {
    res.send("New Details !!");
  }
}
module.exports = new SiteController();
