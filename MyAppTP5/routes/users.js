var express = require('express');
var router = express.Router();

// Lodash utils library
//const _ = require('lodash');

/*let users = [{
  user: "Adrien", 
  id:"0"
}]

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
  //res.status(200).json({users}); 
});




module.exports = router;
