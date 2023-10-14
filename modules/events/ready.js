var CronJob = require('cron').CronJob;
const mainconfig = require("./../../botManagerConfig/mainconfig.js");
/**
 * STARTING THE MODULE WHILE EXPORTING THE CLIENT INTO IT
 * @param {*} client 
 */
module.exports = async (client) => {
    client.on("ready", () => {
        const stringlength = 69;
        console.log("\n")
        console.log(`     ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓`.bold.yellow)
        console.log(`     ┃ `.bold.yellow + " ".repeat(-1+stringlength-` ┃ `.length)+ "┃".bold.yellow)
        console.log(`     ┃ `.bold.yellow + `DISCORD BOT IS ONLINE!`.bold.yellow + " ".repeat(-1+stringlength-` ┃ `.length-`DISCORD BOT IS ONLINE!`.length)+ "┃".bold.yellow)
        console.log(`     ┃ `.bold.yellow + ` /--/ ${client.user.tag} /--/ `.bold.yellow+ " ".repeat(-1+stringlength-` ┃ `.length-` /--/ ${client.user.tag} /--/ `.length)+ "┃".bold.yellow)
        console.log(`     ┃ `.bold.yellow + " ".repeat(-1+stringlength-` ┃ `.length)+ "┃".bold.yellow)
        console.log(`     ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛`.bold.yellow)
       // console.log(` [X] :: `.magenta + `LOGGED IN AS: `.green + `[ ${client.user.tag} ]`.yellow);
        let counter = 0;
        var job = new CronJob('0 * * * * *', function () {
            console.log(" [Status Update] :: ".bgCyan.red + String(counter).bgCyan.brightRed)
            switch(counter){
                case 0: {
                    try{client.user.setActivity(`${mainconfig.BotSettings.StatusOne}`, {type: "PLAYING"})}catch(e){console.log(String(e))}
                    counter++;
                }break;
                case 1: {
                    try{client.user.setActivity(`${mainconfig.BotSettings.StatusTwo}`, {type: "PLAYING"})}catch(e){console.log(String(e))}
                    counter++;
                }break;
                case 2: {
                    try{client.user.setActivity(`${mainconfig.BotSettings.StatusThree}`, {type: "PLAYING"})}catch(e){console.log(String(e))}
                    counter++;
                }break;
                case 3: {
                    try{client.user.setActivity(`${mainconfig.BotSettings.StatusFour}`, {type: "PLAYING"})}catch(e){console.log(String(e))}
                    counter++;
                }break;
                case 4: {
                    try{client.user.setActivity(`Over ${client.guilds.cache.reduce((a, b) => a + b?.memberCount, 0)} Members!`, {type: "PLAYING"})}catch(e){console.log(String(e))}
                    counter++;
                }break;
                case 5: {
                    try{client.user.setActivity(`${mainconfig.BotSettings.StatusFive}`, {type: "PLAYING"})}catch(e){console.log(String(e))}
                    counter++;
                }break;
                case 6: {
                    try{client.user.setActivity(`${mainconfig.BotSettings.StatusSix}`, {type: "PLAYING"})}catch(e){console.log(String(e))}
                    counter=0;
                }break;
                default: {
                    try{client.user.setActivity(`${mainconfig.BotSettings.StatusSeven}`, {type: "PLAYING"})}catch(e){console.log(String(e))}
                    counter = 0;
                    counter++;
                }break;
            }
        }, null, true, 'Europe/Berlin');
        job.start();
    })

    /**
     * @INFO ANTI CRASHING || ANTI CRASHING
    **/
    
    client.on("ready", async () => {
        console.log(` [X] :: `.magenta + ` LOADED: ANTI CRASHING || ANTI CRASHING`.bold.green)
        process.on('unhandledRejection', (reason, p) => {
          console.log('\n\n\n\n\n[🚩 Anti-Crash] unhandled Rejection:'.toUpperCase().red.dim);
          console.log(reason.stack ? String(reason.stack) : String(reason));
          console.log('=== unhandled Rejection ===\n\n\n\n\n'.toUpperCase().red.dim);
        });
        process.on("uncaughtException", (err, origin) => {
          console.log('\n\n\n\n\n\n[🚩 Anti-Crash] uncaught Exception'.toUpperCase().red.dim);
          console.log(err.stack.yellow.dim ? err.stack.yellow.dim : err.yellow.dim)
          console.log('=== uncaught Exception ===\n\n\n\n\n'.toUpperCase().red.dim);
        })
        process.on('uncaughtExceptionMonitor', (err, origin) => {
          console.log('[🚩 Anti-Crash] uncaught Exception Monitor'.toUpperCase().red.dim);
        });
        process.on('exit', (code) => {
          console.log('\n\n\n\n\n[🚩 Anti-Crash] exit'.toUpperCase().red.dim);
          console.log(code.yellow.dim);
          console.log('=== exit ===\n\n\n\n\n'.toUpperCase().red.dim);
        });
        process.on('multipleResolves', (type, promise, reason) => {
          console.log('\n\n\n\n\n[🚩 Anti-Crash] multiple Resolves'.toUpperCase().red.dim);
          console.log(type, promise, reason);
          console.log('=== multiple Resolves ===\n\n\n\n\n'.toUpperCase().red.dim);
        });
      });
}