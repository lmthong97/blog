const newsRouter = require('./news')
const siteRouter = require('./site')



function route(app){

    app.get('/news', newsRouter);

    app.get('/', siteRouter);


    // app.get('/', function (req, res) {
    //     res.render('home');
    //   });
      
    //   app.get('/news', function (req, res) {
    //     res.render('news');
    //   });
      
    //   app.get('/search', function (req, res) {
    //     res.render('search');
    //   });
      
      app.post('/search', function (req, res) {
        res.send('');
      });
      
      // app.get('/', (req, res) => {
      //   res.send('Hello World!')
      // })
}

module.exports = route;