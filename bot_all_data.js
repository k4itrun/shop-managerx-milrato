//IMPORTING NPM PACKAGES //
const Discord = require('discord.js');
const colors = require("colors");
const fs = require("fs");
const Enmap = require("enmap");
var CronJob = require('cron').CronJob;
const mainconfig = require("./botManagerConfig/mainconfig.js");
const config = require("./botManagerConfig/config.json");

module.exports = (client) => {
    /**
     * @INFO Process.env
    **/
    require("dotenv").config();
    /**
     * @INFO ALERT OF BOT
    **/
    client.on("warn", e => console.log(e.stack ? String(e.stack).grey : String(e).grey))
    client.on("debug", e => console.log(e.stack ? String(e.stack).grey : String(e).grey))
    client.on("rateLimit", e => console.log(JSON.stringify(e).grey))
    /**
     * @INFO Define global variables
    **/
    client.allemojis = require("./botManagerConfig/emoji.json");
    client.embed = require("./botManagerConfig/embed.json");
    client.config = require("./botManagerConfig/config.json");
    client.mainconfig = require("./botManagerConfig/mainconfig.js");
    /**
     * @INFO Define some global collections
    **/
    client.createingbotmap = new Discord.Collection();
    client.cooldowns = new Discord.Collection();
    client.commands = new Discord.Collection();
    client.aliases = new Discord.Collection();
    client.currentServerIP = String(Object.values(require('os').networkInterfaces()).reduce((r, list) => r.concat(list.reduce((rr, i) => rr.concat(i.family === 'IPv4' && !i.internal && i.address || []), [])), [])).split(".")[3].split(",")[0];
    client.allServers = {
        current: client.config.servers[client.currentServerIP] ? client.config.servers[client.currentServerIP] : Object.keys(client.config.servers)[0],
        least: null,
        stats: [],
    }
    /**
     * @INFO Create Databases
    **/
    client.setups = new Enmap({ name: "setups", dataDir: "./dbs/others" });
    client.bots = new Enmap({ name: "bots", dataDir: "./dbs/bots" });
    client.payments = new Enmap({ name: "payments", dataDir: "./dbs/payments" });
    client.staffrank = new Enmap({ name: "staffrank", dataDir: "./dbs/others" });
    client.ticketdata = new Enmap({ name: "ticketdata", dataDir: "./dbs/others" });
    client.payments.ensure("payments", { users: [] });
    client.payments.ensure("invitepayments", { users: [] });
    /**
     * @INFO LOADING SYSTEMS AND MODULES
     */
    //require("./modules/dashboard/index")(client)
    //require("./modules/paypal/index")(client);
    require("./modules/commands")(client)
    require("./modules/tickets/OrderSystem")(client)
    require("./modules/tickets/TicketSystem")(client)

    require("./modules/events/ready")(client)
    require("./modules/events/guildMemberAdd")(client)
    require("./modules/events/guildMemberRemove")(client)
    require("./modules/events/guildMemberUpdate")(client)
    require("./modules/events/messageCreate")(client)
    require("./modules/events/threadCreate")(client)

  //require("./modules/others/payment_system")(client)
    require("./modules/others/feedback_system")(client)
    require("./modules/others/verifysystem")(client)
    require("./modules/others/roles_system")(client)
    require("./modules/others/guess_the_number")(client)
    require("./modules/others/status_role_system")(client)
    require("./modules/others/ticket_updatemsg")(client)
    require("./modules/others/features")(client)
    require("./modules/others/suggest")(client)
    require("./modules/others/autodelete")(client)
    require("./modules/others/getleastServer")(client)
    /**
     * @INFO Create the bot client
    **/
    require('./index'); //Discord Bot
    /**
     * @INFO Startings of bot || Loggin the bot
    **/
    client.login(client.config.token || process.env.token);
}
