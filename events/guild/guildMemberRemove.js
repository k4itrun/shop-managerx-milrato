const discord_canvas = require("discord-canvas");
const Discord = require("discord.js");
const mainconfig = require(`${process.cwd()}/config/mainconfig.js`);
const emoji = require(`${process.cwd()}/config/emoji.json`);
/**
 * STARTING THE MODULE WHILE EXPORTING THE CLIENT INTO IT
 * @param {*} client 
 */
module.exports = async (client, member) => {
    const image = await new discord_canvas.Goodbye()
    .setUsername(member.user.username)
    .setDiscriminator(member.user.discriminator)
    .setMemberCount("1")
    .setGuildName("Team Arcades")
    .setAvatar(member.user.displayAvatarURL({format: "png"}))
    .setColor("border", "#FF0000")
    .setColor("username-box", "#FF0000")
    .setColor("discriminator-box", "#FF0000")
    .setColor("message-box", "#FF0000")
    .setColor("title", "#FF0000")
    .setColor("avatar", "#FF0000")
    .setBackground("https://cdn.discordapp.com/attachments/1005328668417077400/1079970929989394443/black-background-leather-wallpaper-preview.jpg")
    .toAttachment();
    const attachment = new Discord.MessageAttachment(image.toBuffer(), `goodbye-image.png`);
    const welcomeChannel = member.guild.channels.cache.find(ch => ch.id === `${mainconfig.GeneralChat}`);
    
    if (!member.guild || member.guild.id != `${mainconfig.ServerID}`) return
    if (member.user.bot) {
        setTimeout(async () => {
            member.roles.set([`${mainconfig.MemberRoleID}`]).catch(() => { })
        }, 5000)
        return;
    }

    if (!member.user.bot) {
        try {  
            welcomeChannel.send(`${emoji.leave} ${member.user} **left Team Arcades**`);
            member.send({
                files: [attachment],
                embeds: [new Discord.MessageEmbed()
                    .setColor("#FF0000")
                    .setFooter(member.guild.name, member.guild.iconURL({ dynamic: true }))
                    .setImage("attachment://goodbye-image.png")
                    .setDescription(`
<:TeamArcadesLogoBeta:1079612773237002311> Oh ${member.user} you left <:Discord:1075487707356213289> **[Team Arcades](https://teamarcades.xyz)** <:Discord:1075487707356213289> if you want to come back no problem join with this link to 

> <:arrow:1079211960199028796> **[https://discord.gg/team-arcades](https://discord.gg/team-arcades-935157109761388554)**

**We are waiting for you SOON!** <a:doggy_wink:1079215651236884580>`)]
            }).catch(e => { console.warn(e.stack ? String(e.stack).grey : String(e).grey) });
        } catch (e) {
            console.log(e)
        }
    }
}