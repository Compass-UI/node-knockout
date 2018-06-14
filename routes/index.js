var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/** User page */
router.get('/david', function(req, res, next){
  res.render('david', { title: 'David Shams'});
})

module.exports = router;
