var express = require('express');
var router = express.Router();
var vd=require('../videodata');
//double dot is for moving up and then we can find json file


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express',name: 'Rajbala',videodata:vd });
});

module.exports = router;

