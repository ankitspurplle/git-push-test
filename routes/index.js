var express = require('express');
var router = express.Router();
const fs =  require("fs/promises");
const path = require("path");

/* GET home page. */
router.get('/', async function(req, res, next) {
  await fs.appendFile(path.join(__dirname,'../','files','code.log'),'On home page route \n');
  res.render('index', { title: 'Express powered by Plesk' });
});

module.exports = router;
