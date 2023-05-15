const newRouter = require('./news');
const siteRouter = require('./site');
function route(app) {


  // template engine
    
  
  app.use('/news', newRouter);

}

module.exports = route;
