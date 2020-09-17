const express = require('express');
const router = express.Router();

const SeerArticle = require('../models/SeerArticle.model');

// all the /search request
router.use((req, res, next) => {
    console.log('Router level - all search', req.method, req.originalUrl, Date.now());
    next();
})

// List all
router.get('/', (req, res, next) => {
    // let newSeerArticle = new SeerArticle({"title":"test_title", "URL":"http://google.com", "status": "queued", "date": Date.now() })
    // newSeerArticle.save();
    SeerArticle.find( {}, 'title')
        .then(data => res.json(data))
        .catch(next)
});

// search by title
router.post('/byTitle', (req, res, next) => {
    // console.log("req.body:" + req.body.task);
    console.log("req.body:" + req.body.title);

    SeerArticle.find( {'title' : { '$regex' : req.body.title, '$options' : 'i' }}, 'title')
        .then(data => res.json(data))
        .catch(next)
});

// create
router.post('/', (req,res,next) => {
    console.log("req.body:" + req.body.title);

    if(req.body.title) {
        SeerArticle.create(req.body)
            .then(data => res.json(data))
            .catch(err => {
                res.status(400).send('adding new SeerArticle failed');
            });
    } else {
        res.json({
            error: "The input field is empty"
        })
    }
});

module.exports = router;