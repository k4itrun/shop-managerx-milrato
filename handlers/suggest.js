// variables
const colors = require("colors");
const Discord = require("discord.js");
const emoji = require(`${process.cwd()}/config/emoji.json`)
const mainconfig = require(`${process.cwd()}/config/mainconfig.js`);
const ee = require(`${process.cwd()}/config/embed.json`)

module.exports = async (client) => {
    client.on("messageCreate", async (message) => {
        if (!message.guild) return;
        if (message.author.bot) return;
        if (message.channel.id == mainconfig.suggetsChannelID) {
            setTimeout(() => {
                message.delete().catch((e) => { console.log(String(e.stack).grey) })
            }, 1000);
            let suggestReplace = await message.channel.send({
                embeds: [
                    new Discord.MessageEmbed()
                    .setAuthor({ name: `New Suggestion from ${message.author.tag}`, iconURL: `${message.author.displayAvatarURL({dynamic: true})}`})
                    .setDescription("\n>>> " + message.content )
                    .setFooter({ text: "Team Arcades", iconURL: 'https://i.imgur.com/UnHkdfP.png' })
                    .setColor(ee.color)
                ]
            }).catch(e => { console.log(String(e.stack).grey) });
            await suggestReplace.react(`<a:check:1079215644274335834>`).then(() => { }).catch(e => { console.log(String(e.stack).grey) });
            await suggestReplace.react("<a:crossred:1079215647193567382>").then(() => { }).catch(e => { console.log(String(e.stack).grey) })
        }
    })
}