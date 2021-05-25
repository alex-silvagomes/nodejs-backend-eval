const express = require('express');
const router = express.Router();
const rdm_properties = require('./quality-gate/rdm-properties');
const domains_properties = require('../api/quality-gate/domains');



//================== Official API Call ==================\\
router.get('/rdm-properties', async function (req, res) {
  res.setHeader("Content-Type", "application/json");
  
  res.json(rdm_properties);

});

router.get('/healthcheck', async function (req, res) {

  res.setHeader("Content-Type", "application/json");
 

  // Mensagem padrao para retorno 200
  const healthcheck = {
    server: {
      status: "Online",
      message: 'OK',
      stats: serverStats(),
      timestamp: Date.now()
    }
  };

  // RESPONSE ENDPOINT
  try {
    console.log("(GET) /info/healthcheck: ", JSON.stringify(healthcheck));
    res.send(healthcheck);
  } catch (e) {
    healthcheck.server_status = "Offline";
    healthcheck.message = e;
    res.send(healthcheck);
  }
});


router.get('/domains', async function (req, res) {
  res.setHeader("Content-Type", "application/json");
  
  res.json(domains_properties);

});

function convertToTimeString(seconds) {

  var hours = Math.floor(seconds / 3600);
  var minutes = Math.floor((seconds - (hours * 3600)) / 60);
  seconds = seconds - (hours * 3600) - (minutes * 60);
  var time = "";

  if (hours != 0) {
    time = hours + ":";
  }
  if (minutes != 0 || time !== "") {
    minutes = (minutes < 10 && time !== "") ? "0" + minutes : String(minutes);
    time += minutes + ":";
  }
  if (time === "") {
    time = seconds + "s";
  }
  else {
    time += (seconds < 10) ? "0" + seconds : String(seconds);
  }
  return time;
}

function memoryUsage() {
  const used = process.memoryUsage().heapUsed / 1024 / 1024;
  let text = `${Math.round(used * 100) / 100}MB`;

  return text
}

function serverStats() {
  var osutils = require("os-utils");

  var server_stats = {
    platform: osutils.platform(),
    number_of_cpu: osutils.cpuCount(),
    cpu_percent_usage: osutils.cpuUsage(function (v) {
      return v;
    }),
    load_average: osutils.loadavg(5),
    memory_total: `${osutils.totalmem()}MB`,
    memory_free: `${osutils.freemem()}MB`,
    memory_free_percent: `${Math.round(osutils.freememPercentage() * 100)}%`,
    memory_usage: memoryUsage(),
    uptime: convertToTimeString(process.uptime())
  }

  return server_stats;
}

module.exports = router;