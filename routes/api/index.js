const express = require('express');
const router = express.Router();
var path = require('path');
const os = require('os');
const packagejson = require('../../package.json')

//================== Official API Call ==================\\
router.get('/', function (req, res) {

  // HTML 
  //res.sendFile(path.join(__dirname + '/index.html'));
  var statusServer = {
    server: {
      api_name: "api-quality-gate",
      version: packagejson.version,
      status: "Online"
    }
  }
  // JSON
  res.setHeader("Content-Type", "application/json");
  
  res.json(statusServer);

});


module.exports = router;