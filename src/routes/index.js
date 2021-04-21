const newsRouter = require('./news');
const siteRouter = require('./site');
const coursesRouter = require('./courses');


function route(app) {
    app.use('/news', newsRouter);
    app.use('/courses', coursesRouter);


    app.use('/', siteRouter);

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
