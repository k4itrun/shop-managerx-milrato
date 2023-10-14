module.exports = {
 apps: [
  {
   name: "Bot Manager | Team Arcades",
   script: "./index.js",
   watch: true,
   exec_mode: "cluster",
   ignore_watch: ["[/\\]./", "^.sqlite", "[/\\].html", "dbs", "node_modules", "*.html", "servicebots", "^.html", "databases", "cache", "^.", "^[.]", ".git"],
   watch_options: {
    followSymlinks: false,
   },
   args: ["--color"],
  },
 ]
}

//BOTS SETTINGS
/**
const path = require('path');
const fs = require("fs");

module.exports = {
    apps : [{
      name: `BOTNAME_${path.resolve(__dirname).split("/")[7]}`,
      script: 'index.js',
      cron_restart: "0 1 * * *"
    }]
  };
**/
