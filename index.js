//IMPORTING NPM PACKAGES //
const Discord = require('discord.js');
const OS = require('os');
const Events = require("events");
const fs = require("fs");
const Enmap = require("enmap");
var CronJob = require('cron').CronJob;
const config = require(`${process.cwd()}/config/config.json`);

require("dotenv").config();
require("colors");

const client = new Discord.Client({
  fetchAllMembers: false,
  restTimeOffset: 0,
  failIfNotExists: false,
  shards: "auto",
  allowedMentions: {
    parse: ["roles", "users"],
    repliedUser: false,
  },
  partials: ['MESSAGE', 'CHANNEL', 'REACTION', 'GUILD_MEMBER', 'USER'],
  intents: [
    Discord.Intents.FLAGS.GUILDS,
    Discord.Intents.FLAGS.GUILD_MEMBERS,
    Discord.Intents.FLAGS.GUILD_BANS,
    Discord.Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
    Discord.Intents.FLAGS.GUILD_INTEGRATIONS,
    Discord.Intents.FLAGS.GUILD_WEBHOOKS,
    Discord.Intents.FLAGS.GUILD_INVITES,
    Discord.Intents.FLAGS.GUILD_VOICE_STATES,
    Discord.Intents.FLAGS.GUILD_PRESENCES,
    Discord.Intents.FLAGS.GUILD_MESSAGES,
    Discord.Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    Discord.Intents.FLAGS.DIRECT_MESSAGES,
    Discord.Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
  ],
});

client.setMaxListeners(0);
Events.defaultMaxListeners = 0;
process.env.UV_THREADPOOL_SIZE = OS.cpus().length;

/**
 * @INFO Create Databases
 */
client.bots = new Enmap({ name: "bots", dataDir: `./dbs/bots` });
client.setups = new Enmap({ name: "setups", dataDir: `./dbs/others` });
client.staffrank = new Enmap({ name: "staffrank", dataDir: `./dbs/others` });
client.ticketdata = new Enmap({ name: "ticketdata", dataDir: `./dbs/others` });
client.payments = new Enmap({ name: "payments", dataDir: `./dbs/payments`});
client.payments.ensure("payments", { users: [] });
client.payments.ensure("invitepayments", { users: [] });

client.on("warn", e => console.log(e.stack ? String(e.stack).grey : String(e).grey))
client.on("debug", e => console.log(e.stack ? String(e.stack).grey : String(e).grey))
client.on("rateLimit", e => console.log(JSON.stringify(e).grey))

/**
 *  @INFO Define global variables
 */
client.allemojis = require(`${process.cwd()}/config/emoji.json`);
client.embed = require(`${process.cwd()}/config/embed.json`);
client.config = require(`${process.cwd()}/config/config.json`);
client.mainconfig = require(`${process.cwd()}/config/mainconfig.js`);
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
 * @INFO Loading system and Modules
 */
async function requirehandlers(){
  // resolve promise
  for await (const handler of [
    "commands", "events", 
  ]) {
    try{await require(`./handlers/${handler}`)(client);}catch (e){ console.error(e) }
  };
  // assets utils
  [
    "checking", // "update", // "updateWithoutSync", 
  ].forEach(async handler=>{try{ await require(`./utils/handlers/${handler}`)(client); }catch (e){ console.error(e) }});
  // system shop
  [
    "order", "ticket"
  ].forEach(async handler=>{try{ await require(`./handlers/${handler}`)(client); }catch (e){ console.error(e) }});
  // handlers
  [
    "features", "feedback", "get_least_server", 
    "guess_the_number", "payment", "roles", 
    "status_role", "suggest", "ticket_updatemsg", "verify",
  ].forEach(handler => {try{ require(`./handlers/${handler}`)(client); }catch (e){ console.error(e) }});
}
requirehandlers();

/**
 * @INFO Startings of bot || Loggin the bot
**/
client.login(config.token || process.env.token);


///////////////////////////////////
///////////////////////////////////
///////////////////////////////////
///////////////////////////////////
///////////////////////////////////

/**
 * @INFO Start Dashboard
 */
let setup = {};
if (fs.existsSync("config/config.json")) {
  const rawData = fs.readFileSync("config/config.json");
  setup = JSON.parse(rawData);
}
if (setup.startDashboard) {require(`${process.cwd()}/dashboard/index`)(client);} else {
  // console.log('The dashboard will not start according to the configuration.'.bold.yellow);
  return true;
}