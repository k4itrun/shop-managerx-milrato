const { Discord, MessageEmbed }  = require("discord.js");
const { swap_pages2 } = require(`${process.cwd()}/utils/static/utilfunctions.js`)
const { Roles } = require(`${process.cwd()}/config/settings.json`);
const emoji = require(`${process.cwd()}/config/emoji.json`)
module.exports = {
    name: require("path").parse(__filename).name, 
    category: "Setup", 
    aliases: [  ], 
    description: "", 
    run: async (client, message, args, prefix) => {
        if (message.member.roles.highest.rawPosition < message.guild.roles.cache.get(Roles.OwnerRoleId).rawPosition)
            return message.reply({embeds: [new MessageEmbed()
                .setColor("RED")
                .setTitle(`${client.allemojis.deny} ERROR | An Error Occurred`)
                .setDescription(`\`\`\`You are not allowed to execute this Command!\`\`\``)
                .setFooter(message.guild.name, message.guild.iconURL())
                .setTimestamp()
            ]});
        client.setups.set(message.guild.id, !client.setups.get(message.guild.id, "ticketsystem5.enabled"), "ticketsystem5.enabled")
        return message.reply(`> ✅ **The MUSIC BOT ORDER SYSTEM Is Now: \`${client.setups.get(message.guild.id, "ticketsystem5.enabled") ? "Enabled" : "Disabled"}\`**`)
    }
}