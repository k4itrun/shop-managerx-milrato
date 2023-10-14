const Discord = require("discord.js");
const { swap_pages2 } = require(`${process.cwd()}/utils/static/utilfunctions.js`)
const { Roles } = require(`${process.cwd()}/config/settings.json`);
module.exports = {
    name: "help", 
    category: "Info", 
    aliases: ["h", "commandinfo", "cmds", "cmd", "halp"],
    description: "Returns all Commmands, or one specific command", 
    run: async (client, message, args, prefix) => {
        
        var embed1 = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setAuthor("Shop Manager | Free Bots Shop | Information Commands Help", message.guild.iconURL({dynamic: true}), "https://discord.gg/team-arcades-935157109761388554")
        .addField("\`,help\`", "*Shows all commands*", true)
        .addField("\`,invite @BOT / BOTNAME\`", "*gives u an invite link for a BOT*", true)
        .addField("\`,ping\`", "*Shows the Ping of the Bot*", true)
            //.addField("\u200b", "\u200b")
        .addField("\`,uptime\`", "*Shows the Uptime of the Bot*", true)
        .addField("\`,info wait/music/system/etc.\`", "*Gives Information About the Bots, we offer*", true)
            //.addField("\u200b", "\u200b")
        .addField("\`,howtoorder\`", "*Shows how to order a BOT*\n*See the information in <#1080005864645218324> & <#964370139808141366>!*", true)
            //.addField("\u200b", "\u200b")
        .addField("\`,owner @Bot\`", "*Shows who the Owner of the Bot is*", true)
        .addField("\`,bots @USER\`", "*Shows the Bots of a User*", true)
        .addField("\`,botdetails @BOT\`", "*Shows details about a Bot*", true)
        .addField("\`,paymentinfo @BOT\`", "*Shows the Payment Information about a Bot*", true)
            //.addField("\u200b", "\u200b")
        .addField("\`,translate from to ...\`", "*Translates Text from a Language to a Language*\n**Alias:** `tr`", true)
        .addField("\`,modifybot\`", "*Shows Info how to Change a CUSTOM BOT from <#1080005864645218324>*", true)
        .addField("\`,sendmessage\`", "*Shows Info how to Send a MESSAGE with a CUSTOM BOT*", true)



    var embed2 = new Discord.MessageEmbed()
        .setColor("YELLOW")
        .setAuthor("Shop Manager | Free Bots Shop | BOT CREATOR Help", message.guild.iconURL({dynamic: true}), "https://discord.gg/team-arcades-935157109761388554")
        .addField("\`,createbot\` --> Pick the Bot", "*Creates a Order-Bot*", true)
        .addField("\`,cancelcreation\`", "*Cancels the Bot Creation Protection*", true)
        .addField("\`,startbot <@Bot>\`", "*Starts a Bot*", true)
        .addField("\`,restartbot <@Bot>\`", "*Restarts a Bot*", true)
        .addField("\`,stopbot <@Bot>\`", "*Stops a Bot*", true)
        .addField("\`,shell\`", "*Run Somethig In Console/Shell*", true)
        .addField("\`,removebothost <@Bot>\`", "*Removes a Bot from the Host*", true)
        .addField("\`,recoverbothost <@Bot>\`", "*Recovers a Bot, which got removed from the Host*", true)
        .addField("\`,forcestartbot <@Bot>\`", "*Force-Starts a Bot*", true)
        .addField("\`,forcerestartbot <@Bot>\`", "*Force-Restarts a Bot*", true)
        .addField("\`,forcestopbot <@Bot>\`", "*Force-Stops a Bot*", true)
        .addField("\`,botmanagement\` | \`,bm\`", "*Manages the Bots on all hosts [Use only when needed]*", true)



    var embed3 = new Discord.MessageEmbed()
        .setColor("RED")
        .setAuthor("Shop Manager | Free Bots Shop | Ticket Commands (STAFF Only)", message.guild.iconURL({dynamic: true}), "https://discord.gg/team-arcades-935157109761388554")
        .addField("\`,close\`", "*Closes the Current Ticket*", true)
        .addField("\`,setk4itrun\`", "*Sets the Ticket to a k4itrun Ticket*", true)
        .addField("\`,setowner\`", "*Sets the Ticket to a Owner Ticket*", true)
        .addField("\`,setmigrate\`", "*Sets the Ticket to a Migrate Ticket*", true)
        .addField("\`,setmod\`", "*Sets the Ticket to a Mod+ Ticket*", true)
        .addField("\`,setimportant\`", "*Sets the Ticket into an Important State*", true)
        .addField("\`,setwaiting\`", "*Sets the Ticket into a Waiting for Customer Response State*", true)
        .addField("\`,setfinished\`", "*Sets the Ticket into a Finish State*", true)
        .addField("\`,setbot\`", "*Notifies the Bot Creators to create the Bot*", true)
        .addField("\`,addticket <@User>\`", "*Adds a User from the Ticket*", true)
        .addField("\`,removeticket <@User>\`", "*Removes a User from the Ticket*", true)
        .addField("\`,closeall\`", "*Deletes all closed Tickets*", true)


    var embed4 = new Discord.MessageEmbed()
        .setColor("ORANGE")
        .setAuthor("Shop Manager | Free Bots Shop | Higher Staff (Bot Management Commands)", message.guild.iconURL({dynamic: true}), "https://discord.gg/team-arcades-935157109761388554")
        .addField("\`,addbot <@USER> <@Bot <BOTTYPE>\`", "*Adds a Bot to a User*", true)
        .addField("\`,removebot <@USER> <@Bot>\`", "*Removes a Bot to a User*", true)
        .addField("\`,changebot <@USER> <@Bot> <BOTTYPE>\`", "*Changes a Bot*", true)
        .addField("\`,setneworiginalbot\`", "*sets a new original Bot info into the DB*", true)
        .addField("\`,rank [@User]\`", "Shows the Rank of a User!",true)
        .addField("\`,leaderboard [Days to Show]\`", "Shows the Staff Leaderboard\n**Alias**: \`,lb\`",true)
            //.addField("\u200b", "\u200b")
        .addField("\`,payment <Time> <@User> <@Bot>\`", "*Notes the Payment*", true)
        .addField("\`,invitepayment <Time> <@User> <@Bot>\`", "*Notes the Payment for Invites*", true)
        .addField("\`,boostpayment <Time> <@User> <@Bot>\`", "*Notes the Payment for 2xBoosts*", true)
        .addField("\`,removepayment <Time> <@Bot>\`", "*Removes the Payment(s) of this Bot, so that you can set the Payment(s) again!*", true)
        .addField("\`,noguildremovebothost\`", "*Removes bot host of all no guild bots*", true)
        .addField("\`,eval\`", "*Eval Command (Only Developers)*", true)

        var embed5 = new Discord.MessageEmbed()
        .setColor("BLUE")
        .setAuthor("Shop Manager | Free Bots Shop | Other Setup Commands", message.guild.iconURL({dynamic: true}), "https://discord.gg/team-arcades-935157109761388554")
        .addField("\`,setuporder\`", "*Setup Order Ticket*", true)
        .addField("\`,setuprules\`", "*Setup Rules Channel*", true)
        .addField("\`,setuproles\`", "*Setup Reaction-Roles Channel*", true)
        .addField("\`,setupnodestats\`", "*Setup Status Role System*", true)
        .addField("\`,setupfeatures\`", "*Setup Features Channel*", true)

    var embed6 = new Discord.MessageEmbed()
        .setColor("WHITE")
        .setAuthor("Shop Manager | Free Bots Shop | Order Setup Commands", message.guild.iconURL({dynamic: true}), "https://discord.gg/team-arcades-935157109761388554")
        .addField("\`,togglepartnerapply\`", "*Enables/Disables the Partner Apply System*", true)
        .addField("\`,toggleteamapply\`", "*Enables/Disables the Team Apply System*", true)
            //.addField("\u200b", "\u200b")
        .addField("\`,togglegeneral\`", "*Enables/Disables the General Ticket System*", true)
        .addField("\`,togglesource\`", "*Enables/Disables the Source Order*", true)
        .addField("\`,togglecustom\`", "*Enables/Disables the Custom Source Order*", true)
            //.addField("\u200b", "\u200b")
        .addField("\`,toggleclanbot\`", "*Enables/Disables the Clan/System Bot Order*", true)
        .addField("\`,toggleadmin\`", "*Enables/Disables the Admin Bot Order*", true)
        .addField("\`,togglemusicbot\`", "*Enables/Disables the Music Bot Order*", true)
        .addField("\`,togglerythmclone\`", "*Enables/Disables the Rythm Clone Order*", true)
        .addField("\`,toggleLightMusicBot\`", "*Enables/Disables the LightMusicBot Bot Order*", true)
        .addField("\`,togglemodmail\`", "*Enables/Disables the Mod Mail Bot Order*", true)
            //.addField("\u200b", "\u200b")
        .addField("\`,ensure\` / \`,savedb\` / \`,resetsettings\`", "*Ensures / Saves the Database, so that the default Data get's applied*", true)


    swap_pages2(client, message, [
        embed1,
        embed2,
        embed3,
        embed4,
        embed5,
        embed6,
    ]);
    }
}