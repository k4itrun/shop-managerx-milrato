const { MessageEmbed, Permissions } = require("discord.js");
const config = require(`${process.cwd()}/config/config.json`);
const ee = require(`${process.cwd()}/config/embed.json`);
const role = require(`${process.cwd()}/config/settings.json`);
module.exports = {
  name: "embed", //the Command Name [REQUIRED]
  usage : ",embed Title ++ Description ++ (img)",

  run: async (client, message, args, plusArgs, cmdUser, text, prefix) => {
    if (message.member.permissions.has(role.Roles.OwnerRoleId || role.Roles.FounderId || role.Roles.CoOwnerRoleId || role.Roles.AdminRoleId)) {
    try{
        const splitArgs = args.join(" ").split("++")
        console.log(args)
      let title = splitArgs[0];
      let desc = splitArgs[1];
      let img = splitArgs[2]
      if (!splitArgs[0] || !splitArgs[1]) return;

      message.channel.send({embeds: [new MessageEmbed()
              .setColor(ee.color)
              .setFooter(ee.footertext, ee.footericon)
              .setTitle(title ? title.substring(0, 256) : "")
              .setDescription(desc ? desc.substring(0, 4096) : "")
              .setImage(img ? img.substring(0, 4096) : "")]    
      })
      message.delete().catch(e => console.log("Couldn't delete msg, this is a catch to prevent crash"))
    } catch (e) {
        console.log(String(e.stack).bgRed)
        return message.reply({embeds: [new MessageEmbed()
            .setColor(ee.wrongcolor)
            .setFooter(ee.footertext, ee.footericon)
            .setTitle(`${client.allemojis.deny} ERROR | An Error Occurred`)
            .setDescription(`\`\`\`${e.message ? String(e.message).substr(0, 2000) : String(e).substr(0, 2000)}\`\`\``)
        ]});
    }
}else {
    message.reply("You don't have rights")
}
  }
}
