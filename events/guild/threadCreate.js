//IMPORTING NPM PACKAGES
const Discord = require('discord.js');
/**
 * STARTING THE MODULE WHILE EXPORTING THE CLIENT INTO IT
 * @param {*} client 
 */
module.exports = async (client, thread) => {
    if(thread.joinable){
        try{
            await thread.join();
        } catch (e){
            console.log(e)
        }
    }
}

