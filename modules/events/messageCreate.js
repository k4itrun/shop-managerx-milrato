const { links } = require("../../botManagerConfig/scamurls.json");

module.exports = (client) => {

        client.on('messageCreate', async message => {

            if(message.author.bot || !message.guild) return;
            let database = links

            database.forEach((m) => {
                if(message.content.toLowerCase().includes(m)) {
                    message.delete()
                    message.reply(`<:no:1079212019376476160> **ANTI SCAM | It is not allowed to send scam or fraudulent links!**`)
                    message.member.timeout(200000, `Do not send SCAM or FRAUDULENT links on the server`)
                    message.author.send(`<:no:1079212019376476160> **ANTI SCAM | You just had a sanction on the server for sending scam or fraudulent links!**\n> *Do not make this mistake again, a scam or fraudulent link is dangerous for the server!*`)
                }
            })
        })
}