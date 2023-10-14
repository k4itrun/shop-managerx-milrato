const { MessageEmbed, MessageActionRow, MessageButton, MessageSelectMenu } = require("discord.js");
const mainconfig = require("../../botManagerConfig/mainconfig.js")
const rules = require("../../botManagerConfig/rules.js")
const settings = require("../../botManagerConfig/settings.json");

module.exports = async (client) => {
    
    const RulesChannel = `${mainconfig.RulesChannel.toString()}`;
    const verifiedRoleId = `${mainconfig.VerifyRoleId.toString()}`
    let menuoptions = require("../../botManagerConfig/settings.json").lang;

    client.on("interactionCreate", async (interaction) => {
        if (!interaction?.isButton()) return;
        const { member, channel, message } = interaction;
        if (channel.id == RulesChannel.toString() && interaction?.customId == "differentLang") {
            interaction?.reply({
                ephemeral: true,
                content: `>>> *We would like to satisfy your interest in reading our Rules in your own Language*\n*Select the Language in the Menu down below.*`,
                components: [
                    new MessageActionRow().addComponents([
                    new MessageSelectMenu()
                        .setCustomId('OrderSystemSelection2')
                        .setMaxValues(1) //OPTIONAL, this is how many values you can have at each selection
                        .setMinValues(1) //OPTIONAL , this is how many values you need to have at each selection
                        .setPlaceholder('Select a Language') //message in the content placeholder
                        .addOptions(menuoptions.map(option => {
                            let Obj = {}
                            Obj.label = option.label ? option.label.substring(0, 25) : option.value.substring(0, 25)
                            Obj.value = option.value.substring(0, 25)
                          //  Obj.description = option.description.substring(0, 50)
                            if (option.emoji) Obj.emoji = option.emoji;
                            return Obj;
                        }))
                    ])
                ]
            }).catch(() => { });
        }

        if (channel.id == RulesChannel.toString() && interaction?.customId == "arcadesverify") {
            if (member.roles.cache.has(verifiedRoleId)) {
                return interaction?.reply({
                    ephemeral: true,
                    content: "❌ You are already Verified"
                }).catch(() => { });
            }
            interaction?.reply({
                ephemeral: true,
                content: "**I will now ask you 5 Questions, please answer them CORRECTLY (Read the RULES) In Order to get ACCESS to this SERVER!**\n> *Keep in Mind that Capitalization might be important sometimes!*",
                components: [
                    new MessageActionRow().addComponents([
                        new MessageButton().setLabel("Okay, Go ahead!").setStyle("DANGER").setCustomId("okay-go-ahead"),
                        new MessageButton().setLabel("No Sorry, No verification").setStyle("SUCCESS").setCustomId("no-verification"),
                    ])
                ]
            }).catch(() => { });
        }
        // ASK FIRST QUESTION
        if (channel.id == RulesChannel.toString() && interaction?.customId == "okay-go-ahead") {
            interaction?.update({
                ephemeral: true,
                content: "**First Question:**\n> What is the __Keyword__ inside of the RULES?",
                components: [
                    new MessageActionRow().addComponents([
                        new MessageButton().setLabel("Key2023TeamArcades").setStyle("SECONDARY").setCustomId("Key2023TeamArcades"),
                        new MessageButton().setLabel("KeyTeamArcades2023").setStyle("SECONDARY").setCustomId("KeyTeamArcades2023"),
                        new MessageButton().setLabel("KeyTeamArcades2022").setStyle("SECONDARY").setCustomId("KeyTeamArcades2022"),
                        new MessageButton().setLabel("Key2022TeamArcades").setStyle("SECONDARY").setCustomId("Key2022TeamArcades"),
                        new MessageButton().setLabel("KeyOfTeamArcades").setStyle("SECONDARY").setCustomId("KeyOfTeamArcades"),
                    ]),
                    new MessageActionRow().addComponents([
                        new MessageButton().setLabel("Cancel Verification").setStyle("DANGER").setCustomId("Cancel_Verify")
                    ]),
                ]
            }).catch(() => { });
        }

        if (channel.id == RulesChannel && interaction?.customId.startsWith("Ping")) {
            if (interaction?.customId == "PingNo" || interaction?.customId == "PingTickets2") {
                member.roles.add(verifiedRoleId).then(() => {
                    interaction?.update({
                        ephemeral: true,
                        content: `👍 **Good Job!**\n> You successfully Verified yourself and I granted access to you for **Team Arcades**\n> :wave: Enjoy! Just incase you need to know something check out <#${mainconfig.GeneralChat.toString()}>`,
                        components: [],
                    }).catch(() => { });
                }).catch((e) => {
                    console.log(e)
                    interaction?.update({
                        ephemeral: true,
                        content: "❌ Something went terrible Wrong I'm Sorry please check with <@1088554690268119103>\n> **Please send a SCREENSHOT of this MESSAGE too**, so that we know you should have succesfully solved the Verification!",
                        components: [],
                    }).catch(() => { });
                });
            } else {
                interaction?.update({
                    ephemeral: true,
                    content: ":x: **WRONG ANSWER**\n> Verification Cancelled, Make sure to Read the RULES AGAIN!\n> Tipp: ||Check Rule **10) Do not ping** __very carefully__!||",
                    components: [
                        new MessageActionRow().addComponents([
                            new MessageButton().setLabel("Yes, I am").setStyle("DANGER").setCustomId("PingYes").setDisabled(),
                            new MessageButton().setLabel("Only in Tickets").setStyle("DANGER").setCustomId("PingTickets").setDisabled(),
                            new MessageButton().setLabel("No, I am not").setStyle("SUCCESS").setCustomId("PingNo").setDisabled(),
                            new MessageButton().setLabel("In Tickets if no Response").setStyle("SUCCESS").setCustomId("PingTickets2").setDisabled(),
                            new MessageButton().setLabel("Only when it's urgent").setStyle("DANGER").setCustomId("PingUrgent").setDisabled(),
                        ]),
                    ]
                }).catch(() => { });
            }
        }

        if (channel.id == RulesChannel && interaction?.customId.startsWith("Key")) {
            if (interaction?.customId == "Key2023TeamArcades") {
                interaction?.update({
                    ephemeral: true,
                    content: "**SECOND Question:**\n> Am I allowed to ping People?",
                    components: [
                        new MessageActionRow().addComponents([
                            new MessageButton().setLabel("Yes, I am").setStyle("SECONDARY").setCustomId("PingYes"),
                            new MessageButton().setLabel("No, I am not").setStyle("SECONDARY").setCustomId("PingNo"),
                            new MessageButton().setLabel("Only in Tickets").setStyle("SECONDARY").setCustomId("PingTickets"),
                            new MessageButton().setLabel("Only In Ticket if Respons").setStyle("SECONDARY").setCustomId("PingTickets2"),
                            new MessageButton().setLabel("Only when it's urgent").setStyle("SECONDARY").setCustomId("PingUrgent"),
                        ]),
                        new MessageActionRow().addComponents([
                            new MessageButton().setLabel("Cancel Verification").setStyle("DANGER").setCustomId("Cancel_Verify")
                        ]),
                    ]
                }).catch(() => { });
            } else {
                interaction?.update({
                    ephemeral: true,
                    content: ":x: **WRONG KEYWORD**\n> Verification Cancelled, This key is hidden in the rules, read carefully and you will find it!\n> Tipp: ||Read my first 4 rules and you will find it!||",
                    components: [
                        new MessageActionRow().addComponents([
                            new MessageButton().setLabel("Key2022TeamArcades").setStyle("DANGER").setCustomId("Key2022TeamArcades").setDisabled(),
                            new MessageButton().setLabel("KeyTeamArcades2023").setStyle("DANGER").setCustomId("KeyTeamArcades2023").setDisabled(),
                            new MessageButton().setLabel("KeyTeamArcades2022").setStyle("DANGER").setCustomId("KeyTeamArcades2022").setDisabled(),
                            new MessageButton().setLabel("Key2023TeamArcades").setStyle("SUCCESS").setCustomId("Key2023TeamArcades").setDisabled(),
                            new MessageButton().setLabel("KeyOfTeamArcades").setStyle("DANGER").setCustomId("KeyOfTeamArcades").setDisabled(),
                        ])
                    ]
                }).catch(() => { });
            }
        }

        if (channel.id == RulesChannel && interaction?.customId == "Cancel_Verify") {
            interaction?.update({
                ephemeral: true,
                content: "👌 **Cancelled the Verification Process!**",
                components: []
            }).catch(() => { });
        }
        // CANCEL 
        if (channel.id == RulesChannel && interaction?.customId == "no-verification") {
            interaction?.reply({
                ephemeral: true,
                content: "👌 **Cancelled the Verification Process!**"
            }).catch(() => { });
        }
    })
    //Languages of bot rules
    client.on('interactionCreate', async interaction => {
        if (!interaction.isSelectMenu()) return;
        if (interaction.message.channel.id == RulesChannel) {
         let menuIndex = settings.lang.find(v => String(v.value).split(" ").join("").substring(0, 25) == String(interaction.values[0]).split(" ").join("").substring(0, 25));
        
         if(menuIndex.type){
         switch(menuIndex.type){
            case "rulesEN" : {
                 interaction.reply({
                     embeds: [
                         new MessageEmbed()
                         .setColor(client.config.color)
                         .setTitle("Team Arcades | Rules")
                         .setDescription(rules.rulesEN)
                     ],
                     ephemeral: true
                 });
             } break;
             case "rulesGE" : {
                interaction.reply({
                    embeds: [
                        new MessageEmbed()
                        .setColor(client.config.color)
                        .setTitle("Team Arcades | Regeln")
                        .setDescription(rules.rulesGE)
                    ],
                    ephemeral: true
                });
            } break;
            case "rulesSP" : {
                interaction.reply({
                    embeds: [
                        new MessageEmbed()
                        .setColor(client.config.color)
                        .setTitle("Team Arcades | Reglas")
                        .setDescription(rules.rulesSP)
                    ],
                    ephemeral: true
                });
            } break;
         }} else {
            return interaction.reply({content: `:x: **Sorry, but something went wrong!**`, ephemeral: true}).catch((e)=>{console.warn(e.stack ? String(e.stack).grey : String(e).grey)})
        }
     }
    })
}