const path = require('path');
const fs = require("fs");

module.exports = {
    apps : [{
      name: `RYTHMCLONE_${path.resolve(__dirname).split("/")[7]}`,
      script: 'index.js',
      cron_restart: "0 1 * * *"
    }]
};