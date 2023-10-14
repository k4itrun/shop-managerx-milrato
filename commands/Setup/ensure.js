const { MessageEmbed, Permissions } = require("discord.js");
const { Roles } = require(`${process.cwd()}/config/settings.json`);
const emoji = require(`${process.cwd()}/config/emoji.json`)
const {
    theDB,
} = require(`${process.cwd()}/utils/static/utilfunctions.js`);

module.exports = {
    name: require("path").parse(__filename).name,
    category: "Setup",
    aliases: ["savedb"],
    description: "",
    run: async (client, message, args, prefix) => {
        if (message.member.permissions.has("ADMINISTRATOR")) {
            theDB(client, message.guild);
            await message.reply(`✅ ***Succesfully Saved ALL The DataBase***`).catch(() => { });
        } else {
            message.reply({
                embeds: [new MessageEmbed()
                    .setColor("RED")
                    .setTitle(`${client.allemojis.deny} ERROR | An Error Occurred`)
                    .setDescription(`\`\`\`You Don't Have Permission To Run This Command\`\`\``)
                    .setFooter(message.guild.name, message.guild.iconURL())
                    .setTimestamp()
                ]
            });
        }
    }
}
