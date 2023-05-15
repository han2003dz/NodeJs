class SiteController {
  index(req, res) {
    res.render("news");
  }
  search(req, res) {
    res.send("New Details !!");
  }
}
module.exports = new SiteController();
