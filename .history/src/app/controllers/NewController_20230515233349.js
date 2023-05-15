class NewController{
    index(req, res){
        res.render('news');
    }
    show(){
        res.send('New Details !!');
    }
}
module.exports = new NewController;