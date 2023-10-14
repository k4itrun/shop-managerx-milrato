const path = require('path');
const fs = require("fs");

module.exports = {
    apps : [{
      name: `24_7_MUSIC_BOT_${path.resolve(__dirname).split("/")[7]}`,
      script: 'index.js',
      cron_restart: "0 1 * * *"
    }]
};