const mainconfig = require("../../botManagerConfig/mainconfig.js")
/**
 * STARTING THE MODULE WHILE EXPORTING THE CLIENT INTO IT
 * @param {*} client 
 */
const emoji = require("../../botManagerConfig/emoji.json");
const guessNumbers = [];
 module.exports = async (client) => {
    
    //GUESS THE NUMBER
    client.on("messageCreate", async (message) => {
        
        let channelID = `${mainconfig.guessTheNumberChannelID}` //873209073225592842
        let hostID = `${mainconfig.OwnerInformation.OwnerID}` //1088554690268119103
        let accessRoleID = `${mainconfig.guessTheNumberRoleID}` // 873208791963951125
        const validNumbers = [13526, 6622, 4917, 17126, 7743, 1143, 13540, 5446, 1101, 8433, 19574, 18633, 15097, 2895, 19155, 10881, 9130, 8029, 5948, 12117]
        const STILLvalidNumbers = [6622, 4917, 17126, 7743, 9130, 5948, 12117]
        
        if(message.guild && message.channel.id == channelID){
            if(STILLvalidNumbers.includes(parseInt(message.content)) && !guessNumbers.includes(parseInt(message.content))){
                guessNumbers.push(parseInt(message.content));
                await message.pin().catch(() => {});
                await message.reply(`<@&${accessRoleID}> **The \`${validNumbers.length - STILLvalidNumbers.length + guessNumbers.length}.\` / \`${validNumbers.length}\` Number was found!**\n\n> ${message.author} **__${message.author.tag}__ is the Winner!**\n*DM <@${hostID}> to redeem your price!*`).catch(() => {});
                await message.react(`<a:check:1079215644274335834>`).catch(() => {});//check      
                await message.react(`<a:doggy_wink:1079215651236884580>`).catch(() => {});
                await message.react(`<a:KEK_Boom:1079215670421635112>`).catch(() => {});
                await message.react(`<:Stonks:1079215689807691776>`).catch(() => {});
                await message.react(`<:Like:1079212009284980887>`).catch(() => {});
            }
        }
    })
}
