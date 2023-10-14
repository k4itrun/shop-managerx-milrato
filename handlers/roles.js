const { MessageEmbed } = require("discord.js");
const { createbot } = require(`${process.cwd()}/config/settings.json`);
const mainconfig = require(`${process.cwd()}/config/mainconfig.js`);
const { SystemRolesMenu } = require(`${process.cwd()}/config/mainconfig.js`);
const settings = require(`${process.cwd()}/config/settings.json`);
const emojis = require(`${process.cwd()}/config/emoji.json`)

/**************************************************************************
   * @INFO - ROLES SYSTEM
   **************************************************************************/

module.exports = async (client) => {
     let SelfRoleChannelID = `${mainconfig.SelfRoleChannelID}`
     client.on('interactionCreate', async interaction => {
        const { member, channel, message } = interaction;
        if (!interaction.isSelectMenu()) return;
        if (interaction.message.channel.id == SelfRoleChannelID) {
         let menuIndex = settings.selectRoles.find(v => String(v.value).split(" ").join("").substring(0, 25) == String(interaction.values[0]).split(" ").join("").substring(0, 25));
        
         if(menuIndex.type){
         switch(menuIndex.type){
            //ROLES LENGUAGES
            case "EnglishLanguages" : {
                if (member.roles.cache.some(role => role.id == SystemRolesMenu.EnglishLanguages)) {
                    interaction.reply({content: `<:leave:1090016028924330086> **You have successfully \`removed\` the role <@&${SystemRolesMenu.EnglishLanguages}>**` , ephemeral: true})
                    member.roles.remove(SystemRolesMenu.EnglishLanguages)
                } else {
                    member.roles.add(SystemRolesMenu.EnglishLanguages)
                    await interaction.reply({ content: `<:joined:1090016031185059950> **You have successfully \`added\` the role <@&${SystemRolesMenu.EnglishLanguages}>**`, ephemeral: true })}
            } break;
             case "GermanLanguages" : {
                if (member.roles.cache.some(role => role.id == SystemRolesMenu.GermanLanguages)) {
                    interaction.reply({content: `<:leave:1090016028924330086> **You have successfully \`removed\` the role <@&${SystemRolesMenu.GermanLanguages}>**` , ephemeral: true})
                    member.roles.remove(SystemRolesMenu.GermanLanguages)
                } else {
                    member.roles.add(SystemRolesMenu.GermanLanguages)
                    await interaction.reply({ content: `<:joined:1090016031185059950> **You have successfully \`added\` the role <@&${SystemRolesMenu.GermanLanguages}>**`, ephemeral: true })}
            } break;
             case "SpanishLanguages" : {
                if (member.roles.cache.some(role => role.id == SystemRolesMenu.SpanishLanguages)) {
                    interaction.reply({content: `<:leave:1090016028924330086> **You have successfully \`removed\` the role <@&${SystemRolesMenu.SpanishLanguages}>**` , ephemeral: true})
                    member.roles.remove(SystemRolesMenu.SpanishLanguages)
                } else {
                    member.roles.add(SystemRolesMenu.SpanishLanguages)
                    await interaction.reply({ content: `<:joined:1090016031185059950> **You have successfully \`added\` the role <@&${SystemRolesMenu.SpanishLanguages}>**`, ephemeral: true })}
            } break;
            //ROLES GENDER
            case "MaleGender" : {
                if (member.roles.cache.some(role => role.id == SystemRolesMenu.MaleGender)) {
                    interaction.reply({content: `<:leave:1090016028924330086> **You have successfully \`removed\` the role <@&${SystemRolesMenu.MaleGender}>**` , ephemeral: true})
                    member.roles.remove(SystemRolesMenu.MaleGender)
                } else {
                    member.roles.add(SystemRolesMenu.MaleGender)
                    await interaction.reply({ content: `<:joined:1090016031185059950> **You have successfully \`added\` the role <@&${SystemRolesMenu.MaleGender}>**`, ephemeral: true })}
            } break;
            case "FemaleGender" : {
                if (member.roles.cache.some(role => role.id == SystemRolesMenu.FemaleGender)) {
                    interaction.reply({content: `<:leave:1090016028924330086> **You have successfully \`removed\` the role <@&${SystemRolesMenu.FemaleGender}>**` , ephemeral: true})
                    member.roles.remove(SystemRolesMenu.FemaleGender)
                } else {
                    member.roles.add(SystemRolesMenu.FemaleGender)
                    await interaction.reply({ content: `<:joined:1090016031185059950> **You have successfully \`added\` the role <@&${SystemRolesMenu.FemaleGender}>**`, ephemeral: true })}
            } break;
            case "OtherGender" : {
                if (member.roles.cache.some(role => role.id == SystemRolesMenu.OtherGender)) {
                    interaction.reply({content: `<:leave:1090016028924330086> **You have successfully \`removed\` the role <@&${SystemRolesMenu.OtherGender}>**` , ephemeral: true})
                    member.roles.remove(SystemRolesMenu.OtherGender)
                } else {
                    member.roles.add(SystemRolesMenu.OtherGender)
                    await interaction.reply({ content: `<:joined:1090016031185059950> **You have successfully \`added\` the role <@&${SystemRolesMenu.OtherGender}>**`, ephemeral: true })}
            } break;
            //ROLES PINGS
            case "NewsPings" : {
                if (member.roles.cache.some(role => role.id == SystemRolesMenu.NewsPings)) {
                    interaction.reply({content: `<:leave:1090016028924330086> **You have successfully \`removed\` the role <@&${SystemRolesMenu.NewsPings}>**` , ephemeral: true})
                    member.roles.remove(SystemRolesMenu.NewsPings)
                } else {
                    member.roles.add(SystemRolesMenu.NewsPings)
                    await interaction.reply({ content: `<:joined:1090016031185059950> **You have successfully \`added\` the role <@&${SystemRolesMenu.NewsPings}>**`, ephemeral: true })}
            } break;
            case "PollPings" : {
                if (member.roles.cache.some(role => role.id == SystemRolesMenu.PollPings)) {
                    interaction.reply({content: `<:leave:1090016028924330086> **You have successfully \`removed\` the role <@&${SystemRolesMenu.PollPings}>**` , ephemeral: true})
                    member.roles.remove(SystemRolesMenu.PollPings)
                } else {
                    member.roles.add(SystemRolesMenu.PollPings)
                    await interaction.reply({ content: `<:joined:1090016031185059950> **You have successfully \`added\` the role <@&${SystemRolesMenu.PollPings}>**`, ephemeral: true })}
            } break;
            case "ChangesPings" : {
                if (member.roles.cache.some(role => role.id == SystemRolesMenu.ChangesPings)) {
                    interaction.reply({content: `<:leave:1090016028924330086> **You have successfully \`removed\` the role <@&${SystemRolesMenu.ChangesPings}>**` , ephemeral: true})
                    member.roles.remove(SystemRolesMenu.ChangesPings)
                } else {
                    member.roles.add(SystemRolesMenu.ChangesPings)
                    await interaction.reply({ content: `<:joined:1090016031185059950> **You have successfully \`added\` the role <@&${SystemRolesMenu.ChangesPings}>**`, ephemeral: true })}
            } break;
            //ROLES STATES
            case "DmsOpenState" : {
                if (member.roles.cache.some(role => role.id == SystemRolesMenu.DmsOpenState)) {
                    interaction.reply({content: `<:leave:1090016028924330086> **You have successfully \`removed\` the role <@&${SystemRolesMenu.DmsOpenState}>**` , ephemeral: true})
                    member.roles.remove(SystemRolesMenu.DmsOpenState)
                } else {
                    member.roles.add(SystemRolesMenu.DmsOpenState)
                    await interaction.reply({ content: `<:joined:1090016031185059950> **You have successfully \`added\` the role <@&${SystemRolesMenu.DmsOpenState}>**`, ephemeral: true })}
            } break;
            case "DmsAskState" : {
                if (member.roles.cache.some(role => role.id == SystemRolesMenu.DmsAskState)) {
                    interaction.reply({content: `<:leave:1090016028924330086> **You have successfully \`removed\` the role <@&${SystemRolesMenu.DmsAskState}>**` , ephemeral: true})
                    member.roles.remove(SystemRolesMenu.DmsAskState)
                } else {
                    member.roles.add(SystemRolesMenu.DmsAskState)
                    await interaction.reply({ content: `<:joined:1090016031185059950> **You have successfully \`added\` the role <@&${SystemRolesMenu.DmsAskState}>**`, ephemeral: true })}
            } break;
            case "DmsClosedState" : {
                if (member.roles.cache.some(role => role.id == SystemRolesMenu.DmsClosedState)) {
                    interaction.reply({content: `<:leave:1090016028924330086> **You have successfully \`removed\` the role <@&${SystemRolesMenu.DmsClosedState}>**` , ephemeral: true})
                    member.roles.remove(SystemRolesMenu.DmsClosedState)
                } else {
                    member.roles.add(SystemRolesMenu.DmsClosedState)
                    await interaction.reply({ content: `<:joined:1090016031185059950> **You have successfully \`added\` the role <@&${SystemRolesMenu.DmsClosedState}>**`, ephemeral: true })}
            } break;
         }} else {
            return interaction.reply({content: `:x: **Sorry, but something went wrong!**`, ephemeral: true}).catch((e)=>{console.warn(e.stack ? String(e.stack).grey : String(e).grey)})
        }
     }
    })

}
 