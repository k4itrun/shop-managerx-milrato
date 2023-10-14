const { Discord, MessageEmbed }  = require("discord.js");
const { swap_pages2 } = require("../../utilfunctions")
const { Roles } = require("../../../botManagerConfig/settings.json");
const emoji = require("../../../botManagerConfig/emoji.json")
module.exports = {
    name: require("path").parse(__filename).name, 
    category: "Setup", 
    aliases: [  ], 
    description: "", 
    run: async (client, message, args, prefix) => {
        if (message.member.roles.highest.rawPosition < message.guild.roles.cache.get(Roles.ChiefHumanResources).rawPosition)
            return message.reply({embeds: [new MessageEmbed()
                .setColor("RED")
                .setTitle(`${client.allemojis.deny} ERROR | An Error Occurred`)
                .setDescription(`\`\`\`You are not allowed to execute this Command!\`\`\``)
                .setFooter(message.guild.name, message.guild.iconURL())
                .setTimestamp()
            ]});
        client.setups.set(message.guild.id, !client.setups.get(message.guild.id, "ticketsystem_teamapply.enabled"), "ticketsystem_teamapply.enabled")
        return message.reply(`> ✅ **The Team Application System is now: \`${client.setups.get(message.guild.id, "ticketsystem_teamapply.enabled") ? "Enabled" : "Disabled"}\`**`)
    }
}