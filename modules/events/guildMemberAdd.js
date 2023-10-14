const discord_canvas = require("discord-canvas");
const Discord = require("discord.js");
const mainconfig = require("../../botManagerConfig/mainconfig.js");
const emoji = require("../../botManagerConfig/emoji.json");
/**
 * STARTING THE MODULE WHILE EXPORTING THE CLIENT INTO IT
 * @param {*} client 
 */
module.exports = async (client) => {

    client.on("guildMemberAdd", async member => {

        const { Permissions: { FLAGS } } = require("discord.js")
        if (member.guild && member.user.bot) {
            console.log("BOT GOT ADDED")
            if (member.permissions.has(FLAGS.ADMINISTRATOR) || member.permissions.has(FLAGS.MANAGE_GUILD) || member.permissions.has(FLAGS.KICK_MEMBERS) || member.permissions.has(FLAGS.BAN_MEMBERS) || member.permissions.has(FLAGS.MANAGE_CHANNELS) || member.permissions.has(FLAGS.MANAGE_ROLES) || member.permissions.has(FLAGS.MANAGE_WEBHOOKS)) {
                let AuditData = await member.guild.fetchAuditLogs({
                    limit: 1,
                    type: "BOT_ADD"
                }).then((audit => {
                    return audit.entries.first()
                })).catch((e) => {
                    console.log(e);
                    console.log("KICK BOT!");
                    return member.kick().catch(console.warn);
                })
                let AddedUserID = AuditData.executor.id;
                const WhitelistedUsers = [`${mainconfig.OwnerInformation.OwnerID}`];
                if (WhitelistedUsers.includes(AddedUserID)) {
                    console.log(`Invited by ${AddedUserID}`);
                } else {
                    console.log("KICK BOT!");
                    return member.kick().catch(console.warn);
                }
            } else {
                console.log("NO PERMS BOT", member.permissions.has(FLAGS.ADMINISTRATOR))
            }
        }
    })

    client.on("guildMemberAdd", async member => {

        const image = await new discord_canvas.Welcome()
        .setUsername(member.user.username)
        .setDiscriminator(member.user.discriminator)
        .setMemberCount("1")
        .setGuildName("Team Arcades")
        .setAvatar(member.user.displayAvatarURL({format: "png"}))
        .setColor("border", "#FFFFFF")
        .setColor("username-box", "#FFFFFF")
        .setColor("discriminator-box", "#FFFFFF")
        .setColor("message-box", "#FFFFFF")
        .setColor("title", "#FFFFFF")
        .setColor("avatar", "#FFFFFF")
        .setBackground("https://cdn.discordapp.com/attachments/1005328668417077400/1079970929989394443/black-background-leather-wallpaper-preview.jpg")
        .toAttachment();
        const attachment = new Discord.MessageAttachment(image.toBuffer(), `welcome-image.png`);
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
                welcomeChannel.send(`${emoji.joines} ${member.user} **joined Team Arcades**`);
                member.send({
                    files: [attachment],
                    embeds: [new Discord.MessageEmbed()
                        .setColor("#FFFFFF")
                        .setFooter(member.guild.name, member.guild.iconURL({ dynamic: true }))
                        .setImage("attachment://welcome-image.png")
                        .setDescription(`
<:TeamArcadesLogoBeta:1079612773237002311> Welcome ${member.user} to <:Discord:1075487707356213289> **[Team Arcades](https://teamarcades.xyz)** <:Discord:1075487707356213289>!

> <:arrow:1079211960199028796> We are very happy to see you here!

> <:arrow:1079211960199028796> You can pick up your roles in <#${mainconfig.SelfRoleChannelID.toString()}>

> <:arrow:1079211960199028796> If you want to order something, you can check out the features in <#${mainconfig.OrdersChannelID.FeaturesChannelID.toString()}> and place an order in <#${mainconfig.OrdersChannelID.OrderChannelID}>

> <:arrow:1079211960199028796> Please mind the RULES <#${mainconfig.RulesChannel.toString()}>

> <:arrow:1079211960199028796> *I recommend you go through the required channels where it will help you.*
> *-) <#989580995655249920>*
> *-) <#1022606223314522232>*
> *-) <#1022620962270752839>*

**Other than that! ENJOY!** :v:`)]
                }).catch(e => { console.warn(e.stack ? String(e.stack).grey : String(e).grey) });
            } catch (e) {
                console.log(e)
            }
            setTimeout(async () => {
                try {
                    let mem = await member;
                    //if (!mem.roles.cache.has("779028739178233886")) mem.roles.add("779028739178233886").catch(e => {console.warn(e.stack ? String(e.stack).grey : String(e).grey)});
                    if (!mem.roles.cache.has(`${mainconfig.AllMemberRoles}`)) mem.roles.add(`${mainconfig.AllMemberRoles}`).catch(e => { console.warn(e.stack ? String(e.stack).grey : String(e).grey) });
                    if (!mem.roles.cache.has(`${mainconfig.AllMemberRoles}`)) mem.roles.add(`${mainconfig.AllMemberRoles}`).catch(e => { console.warn(e.stack ? String(e.stack).grey : String(e).grey) });
                    if (!mem.roles.cache.has(`${mainconfig.AllMemberRoles}`)) mem.roles.add(`${mainconfig.AllMemberRoles}`).catch(e => { console.warn(e.stack ? String(e.stack).grey : String(e).grey) });
                    if (!mem.roles.cache.has(`${mainconfig.AllMemberRoles}`)) mem.roles.add(`${mainconfig.AllMemberRoles}`).catch(e => { console.warn(e.stack ? String(e.stack).grey : String(e).grey) });
                    //CHECK IF USER HAS BOT ROLE
                    if (mem.roles.cache.has(`${mainconfig.MemberRoleID}`)) mem.roles.remove(`${mainconfig.MemberRoleID}`).catch(e => { console.warn(e.stack ? String(e.stack).grey : String(e).grey) });
                    if (mem.roles.cache.has(`${mainconfig.AllMemberRoles}`)) mem.roles.remove(`${mainconfig.AllMemberRoles}`).catch(e => { console.warn(e.stack ? String(e.stack).grey : String(e).grey) });
                } catch (E) {
                    console.log(E)
                }
            }, 3000)
        }
    })

}