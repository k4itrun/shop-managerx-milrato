const { MessageEmbed } = require("discord.js");
const { createbot } = require("../../botManagerConfig/settings.json");
const mainconfig = require("../../botManagerConfig/mainconfig.js");
const settings = require("../../botManagerConfig/settings.json");
const emojis = require("../../botManagerConfig/emoji.json")
/**
 * STARTING THE MODULE WHILE EXPORTING THE CLIENT INTO IT
 * @param {*} client 
 */
module.exports = async (client) => {

     let FeaturesChannelID = `${mainconfig.OrdersChannelID.FeaturesChannelID}`
     client.on('interactionCreate', async interaction => {
        if (!interaction.isSelectMenu()) return;
        if (interaction.message.channel.id == FeaturesChannelID) {
         let menuIndex = settings.features.find(v => String(v.value).split(" ").join("").substring(0, 25) == String(interaction.values[0]).split(" ").join("").substring(0, 25));
        
         if(menuIndex.type){
         switch(menuIndex.type){
            case "SYSTEMBOTS_FEATURES" : {
                 interaction.reply({
                     embeds: [
                         new MessageEmbed()
                         .setColor(client.config.color)
                         .setTitle("🤖 Bot Features of: __System BOT__ 🤖")
                         .setDescription("> *System Bot is a __Multifunctional Discord Bot__ and our Main-Most-Ordered Bot!*\n\n> *It has thousands of features, and get weekly updates!*")
                         .addField("**Features Overview:**", 
`\`\`\`yml
✅ 100 Ticket Systems
✅ 100 Menu-Ticket-System Options
✅ 100 Reaction Role Systems
✅ 100 Application Systems
✅ 100 Auto Support Systems
✅ Automatic Updateting Roster
✅ Advanced Welcome & Leave with Invites Tracking System
✅ Audit Log, and Join-Vc-Custom Messages
✅ Join Vc Roles
✅ 100 Join To Create Systems
✅ 25 Serverstats Systems
✅ Automatic Server Backups
✅ Anti Nuke
✅ Anti-Spam, Anti-Links, Anti-Discord, Anti-Caps
✅ Blacklisted-Words & Ghost-Ping Detector
✅ Automatic Warns
✅ Advanced Warn System with adjustable Punishments
✅ Reaction Roles
✅ Custom Commands & Keywords System
✅ Twitter, Youtube, Twitch Poster & Live Roles
✅ Rank System with RANKING ROLES
✅ Multiple Languages
✅ 100+ Music & Filter Commands
✅ Fun, Minigame, NSFW Commands
✅ Advanced Economy System
✅ 600+ Commands, 100+ Slash Commands, 250+ Systems
 and MUCH more!
\`\`\``)
                         .addField("**Price Overview:**", `> Monthly Option**\`2€ / 30 Days\`**\n\n> Yearly Option: **\`20€ / Year\`**`)
                     ],
                     ephemeral: true
                 });
             } break;
             case "MusicBots_FEATURES" : {
                interaction.reply({
                    embeds: [
                        new MessageEmbed()
                        .setColor(client.config.color)
                        .setTitle("🎵 Bot Features of: __MUSIC BOT__ 🎵")
                        .setDescription("> *Music Bot is a our Main __Music Bot__!*\n\n> *It has many Features and is crazy fast with a clear, good sounding Audio-Playback-Quality!*")
                        .addField("**Features Overview:**", 
`\`\`\`yml
✅ Instant Fast, cristal Clear Audio-Playback
✅ Support for Youtube, Spotify, Soundcloud, Apple Music and more!
✅ Supports Radio Stations
✅ Stage Channel & Thread Support
✅ Pre-Defined Playlists
✅ Default Setup Options for Volume, Filters and more!
✅ Autoplay and Afk System!
✅ Unique Music Request System
\`\`\``)
                        .addField("**Price Overview:**", `> Monthly Option**\`2€ / 30 Days\`**\n\n> Yearly Option: **\`20€ / Year\`**`)
                    ],
                    ephemeral: true
                });
            } break;
             case "RYTHMCLONE_FEATURES" : {
                interaction.reply({
                    embeds: [
                        new MessageEmbed()
                        .setColor(client.config.color)
                        .setTitle(`${emojis.rythm_clone} Bot Features of: __Rythm Clone__ ${emojis.rythm_clone}`)
                        .setDescription("> *Rythm Clone Bot is a our Main __Rythm Clone__!*\n\n> *With Rythm Clone you have a perfect music bot with high sound quality and much more and with the features of **Rythm-Bot**!*")
                        .addField("**Features Overview:**", 
`\`\`\`yml
Soon...
\`\`\``)
                        .addField("**Price Overview:**", `> Monthly Option**\`1€ / 30 Days\`**\n\n> Yearly Option: **\`10€ / Year\`**`)
                    ],
                    ephemeral: true
                });
            } break;
            case "LIGHT_MUSIC_BOT_FEATURES" : {
                interaction.reply({
                    embeds: [
                        new MessageEmbed()
                        .setColor(client.config.color)
                        .setTitle(`${emojis.public_waiting_room} Bot Features of: __LightMusicBot BOT__ ${emojis.public_waiting_room}`)
                        .setDescription("> *LightMusicBot Bot is a __LightMusicBot Bot__ and can be used 24/7!*\n\n> *With LightMusicBot Bot you can have a 24/7 waiting room on a voice channel for members to listen to waiting room radio/music!*")
                        .addField("**Features Overview:**", 
`\`\`\`yml

\`\`\``)
                        .addField("**Price Overview:**", `> Monthly Option**\`1€ / 30 Days\`**\n\n> Yearly Option: **\`10€ / Year\`**`)
                    ],
                    ephemeral: true
                });
            } break;
            case "ADMINISTRATIONBOT_FEATURES" : {
                interaction.reply({
                    embeds: [
                        new MessageEmbed()
                        .setColor(client.config.color)
                        .setTitle("🚫 Bot Features of: __Admin Bot__ 🚫")
                        .setDescription("> *Admin Bot is an __Administration bot__ to moderate your server!*\n\n> *It has a lot of features and is incredibly fast with 24/7 management for your server and keeping it moderated from all bad members.!*")
                        .addField("**Features Overview:**", 
`\`\`\`yml

\`\`\``)
                        .addField("**Price Overview:**", `> Monthly Option**\`1€ / 30 Days\`**\n\n> Yearly Option: **\`10€ / Year\`**`)
                    ],
                    ephemeral: true
                });
            } break;
            case "24_7_MUSIC_BOT_FEATURES" : {
                interaction.reply({
                    embeds: [
                        new MessageEmbed()
                        .setColor(client.config.color)
                        .setTitle("🎵 Bot Features of: __24/7 Music Bot__ 🎵")
                        .setDescription("> *24/7 Music Bot is a __24/7 Music Bot__ and can be used 24/7!*\n\n> *With the \`!customsetup [LINK]\` you can setup a 24/7 Playing Playlist for your wished Voice-Channel!*")
                        .addField("**Features Overview:**", 
`\`\`\`yml
Soon...
\`\`\``)
                        .addField("**Price Overview:**", `> Monthly Option**\`1.50€ / 30 Days\`**\n\n> Yearly Option: **\`15€ / Year\`**`)
                    ],
                    ephemeral: true
                });
            } break;
            case "MODMAILBOT_FEATURES" : {
                interaction.reply({
                    embeds: [
                        new MessageEmbed()
                        .setColor(client.config.color)
                        .setTitle("📨 Bot Features of: __MODMAIL BOT__ 📨")
                        .setDescription("> *Modmail Bot is a __Modmail Bot__ (DM-TICKET-SYSTEM)!*\n\n> *It has support for MULTIGUILDS and is crazy fast!\nAutomatic, HTML BASED Ticket Logs and very useful, for shops and little Discord Servers!*")
                        .addField("**Features Overview:**", 
`\`\`\`yml
Soon...
\`\`\``)
                        .addField("**Price Overview:**", `> Monthly Option**\`0.50€ / 30 Days\`**\n\n> Yearly Option: **\`6€ / Year\`**`)
                    ],
                    ephemeral: true
                });
            } break;
            case "LAVAMUSICBOT_FEATURES" : {
                interaction.reply({
                    embeds: [
                        new MessageEmbed()
                        .setColor(client.config.color)
                        .setTitle(`${emojis.lava_music} Bot Features of: __Lava Bot__ ${emojis.lava_music}`)
                        .setDescription("> *Lava-Music Bot is a our Main __Lava Bot__!*\n\n> *It has many features and it is incredibly fast with the best music quality this bot uses (ERELA.JS) to play music on your server!*")
                        .addField("**Features Overview:**", 
`\`\`\`yml
✅ Instant Fast, cristal Clear Audio-Playback
✅ Support for Youtube, Spotify, Soundcloud, Apple Music and more!
✅ Supports Radio Stations
✅ Stage Channel & Thread Support
✅ Pre-Defined Playlists
✅ Default Setup Options for Volume, Filters and more!
✅ Autoplay and Afk System!
✅ Autoresume
✅ Unique Music Request System
✅ Super fast & High Quality thanks to LAVALINK
✅ Multiple Languages
✅ Premium System
✅ Dj- System
\`\`\``)
                        .addField("**Price Overview:**", `> Monthly Option**\`2€ / 30 Days\`**\n\n> Yearly Option: **\`20€ / Year\`**`)
                    ],
                    ephemeral: true
                });
            } break;
            case "SECURITYBOT_FEATURES" : {
                interaction.reply({
                    embeds: [
                        new MessageEmbed()
                        .setColor(client.config.color)
                        .setTitle("🚨 Bot Features of: __Security Bot__ 🚨")
                        .setDescription("> *Security Bot is a our Main __Security Bot__!*\n\n> *An advanced security bot that will take care of your server at all times!*")
                        .addField("**Features Overview:**", 
`\`\`\`yml
Soon...
\`\`\``)
                        .addField("**Price Overview:**", `> Monthly Option**\`1€ / 30 Days\`**\n\n> Yearly Option: **\`10€ / Year\`**`)
                    ],
                    ephemeral: true
                });
            } break;
            case "NSFW_AND_FUN_BOT_FEATURES" : {
                interaction.reply({
                    embeds: [
                        new MessageEmbed()
                        .setColor(client.config.color)
                        .setTitle("🕹️🔞 Bot Features of: __FUN & NSFW Bot__ 🕹️🔞")
                        .setDescription("> *FUN & NSFW Bot is a our Main __FUN & NSFW Bot__!*\n\n> *Feature rich and blazing fast with entertainment quality to keep your server going!*")
                        .addField("**Features Overview:**", 
`\`\`\`yml
Soon...
\`\`\``)
                        .addField("**Price Overview:**", `> Monthly Option**\`0.50€ / 30 Days\`**\n\n> Yearly Option: **\`6€ / Year\`**`)
                    ],
                    ephemeral: true
                });
            } break;
         }} else {
            return interaction.reply({content: `:x: **Sorry, but something went wrong!**`, ephemeral: true}).catch((e)=>{console.warn(e.stack ? String(e.stack).grey : String(e).grey)})
        }
     }
    })

}
 