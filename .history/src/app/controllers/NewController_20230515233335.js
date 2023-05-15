class NewController{
    index(req, res){
        res.render('news');
    }
    show(){
        res.send('')
    }
}
module.exports = new NewController;