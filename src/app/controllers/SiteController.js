const Course = require ('../models/Course');
const {mutipleMongooseToObject} = require('../../util/mongoose');

class SiteController {
    // [GET] /
    index(req, res) {
        // Course.find({}, function(err, courses){
        //     if(!err){
        //         res.json(courses);
        //     } else {
        //         next(err);
        //     }
        // });
        // viet bang promises 
        Course.find({})
            .then(courses => {
                res.render('home', { 
                courses: mutipleMongooseToObject(courses)
                });
            })
            .catch(error => next(error));

        // res.render('home');
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
