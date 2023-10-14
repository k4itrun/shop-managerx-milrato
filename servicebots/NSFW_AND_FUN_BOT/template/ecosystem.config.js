const path = require('path');
const fs = require("fs");

module.exports = {
    apps : [{
      name: `NSFW_AND_FUN_BOT_${path.resolve(__dirname).split("/")[7]}`,
      script: 'index.js',
      cron_restart: "0 1 * * *"
    }]
};