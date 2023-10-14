//IMPORTING NPM PACKAGES
const { MessageEmbed } = require('discord.js');
const emoji = require(`${process.cwd()}/config/emoji.json`);
const mainconfig = require(`${process.cwd()}/config/mainconfig.js`)
/**
 * STARTING THE MODULE WHILE EXPORTING THE CLIENT INTO IT
 * @param {*} client 
 */

module.exports = async (client, oM, nM) => {
    let boostLogChannelId = `${mainconfig.BoostLogChannel}`
    let boostLogChannel = nM.guild.channels.cache.get(boostLogChannelId);
    if(!boostLogChannel) boostLogChannel = await nM.guild.channels.fetch(boostLogChannelId).catch(()=>{}) || false;
    if(!boostLogChannel) return;

    let stopBoost = new MessageEmbed()
        .setFooter("ID: " + nM.user.id)
        .setTimestamp()
        .setAuthor(nM.user.tag, nM.user.displayAvatarURL({dynamic: true}))
        .setColor("RED")
        .setDescription(`<a:Server_Boosts:1079211967681659000>  ${nM.user} **stopped Boosting us..** <:Cat_Sad:1079212826591252480>`)
    
        let startBoost = new MessageEmbed()
        .setFooter("ID: " + nM.user.id)
        .setTimestamp()
        .setAuthor(nM.user.tag, nM.user.displayAvatarURL({dynamic: true}))
        .setColor("#ff8afb")
        .setDescription(`<a:Server_Boosts:1079211967681659000> ${nM.user} **has boosted us!** <a:Light_Saber_Dancce:1079212829170749561>`)
    //if he/she starts boosting
    if(!oM.premiumSince && nM.premiumSince) {
        boostLogChannel.send({embeds: [startBoost]}).catch(console.warn);
        //send the MEMBER a DM
        nM.send("❤️ Thank you for Boosting our Server!!\n\n❤️ ***We really appreciate it!***").catch(console.warn)
    }
    //if he/she stops boosting
    if(oM.premiumSince && !nM.premiumSince) {
        boostLogChannel.send({embeds: [stopBoost]}).catch(console.warn)
    }
}

