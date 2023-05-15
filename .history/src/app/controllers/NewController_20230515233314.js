class NewController{
    index(req, res){
        res.render('news');
    }
    show()
}
module.exports = new NewController;