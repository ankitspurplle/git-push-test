var express = require("express");
var router = express.Router();
const fs =  require("fs/promises");
const path = require("path");

/* GET users listing. */
router.get("/", async function (req, res, next) {
  await fs.appendFile(path.join(__dirname,'../','files','code.log'),'On route users \n');
  res.send("respond with a resource");
});

module.exports = router;
