if (process.version.slice(1).split(".")[0] < 16) {
    throw new Error("This codes require Node v16.9.0 or higher to run!");
}
const mainconfig = require(`${process.cwd()}/config/mainconfig.js`);
module.exports = (client) => {
    client.on("ready", async () => {
        const ownerId = await client.users.fetch(mainconfig.BotOwnerID).catch(() => null);
        if (!ownerId) {
            throw new Error("The BotOwnerID value you provided in config/mainconfig.js is invalid!");
        }

        mainconfig.OwnerInformation.OwnerID.forEach(async (ownerIddd) => {
            const owner = await client.users.fetch(ownerIddd).catch(() => null);
            if (!owner) {
                throw new Error("One of the OwnerInformation.OwnerID value you provided in config/mainconfig.js is invalid!");
            }
        });

        const guild = await client.guilds.fetch(mainconfig.ServerID).catch(() => null);
        if (!guild) {
            throw new Error("The ServerID value you provided in config/mainconfig.js is invalid!");
        }

        const memberRoleId = await guild.roles.fetch(mainconfig.MemberRoleID).catch(() => null);
        if (!memberRoleId) {
            throw new Error("The Member Role ID value you provided in config/mainconfig.js is invalid!");
        }

        mainconfig.AllMemberRoles.forEach(async (memberId) => {
            const member = await guild.roles.fetch(memberId).catch(() => null);
            if (!member) {
                throw new Error("One of the AllMemberRoles value you provided in config/mainconfig.js is invalid!");
            }
        });

        const rulesChannel = await guild.channels.fetch(mainconfig.RulesChannel).catch(() => null);
        if (!rulesChannel) {
            throw new Error("The RulesChannel value you provided in config/mainconfig.js is invalid!");
        }

        const selfRoleChannelId = await guild.channels.fetch(mainconfig.SelfRoleChannelID).catch(() => null);
        if (!selfRoleChannelId) {
            throw new Error("The SelfRoleChannelID value you provided in config/mainconfig.js is invalid!");
        }

        const botManagerLogs = await guild.channels.fetch(mainconfig.BotManagerLogs).catch(() => null);
        if (!botManagerLogs) {
            throw new Error("The BotManagerLogs value you provided in config/mainconfig.js is invalid!");
        }

        const boostLogChannel = await guild.channels.fetch(mainconfig.BoostLogChannel).catch(() => null);
        if (!boostLogChannel) {
            throw new Error("The BoostLogChannel value you provided in config/mainconfig.js is invalid!");
        }

        mainconfig.VaildCats.forEach(async (cat) => {
            const category = await guild.channels.fetch(cat).catch(() => null);
            if (!category) {
                throw new Error("One of the ValidCats value you provided in config/mainconfig.js is invalid!");
            }
        });

        const generalChat = await guild.channels.fetch(mainconfig.GeneralChat).catch(() => null);
        if (!generalChat) {
            throw new Error("The GeneralChat value you provided in config/mainconfig.js is invalid!");
        }

        const ownerTicket = await guild.channels.fetch(mainconfig.OwnerTicket).catch(() => null);
        if (!ownerTicket) {
            throw new Error("The OwnerTicket value you provided in config/mainconfig.js is invalid!");
        }

        const feedbackChannelId = await guild.channels.fetch(mainconfig.FeedBackChannelID).catch(() => null);
        if (!feedbackChannelId) {
            throw new Error("The FeedBackChannelID value you provided in config/mainconfig.js is invalid!");
        }

        const finishedOrderId = await guild.channels.fetch(mainconfig.FinishedOrderID).catch(() => null);
        if (!finishedOrderId) {
            throw new Error("The FinishedOrderID value you provided in config/mainconfig.js is invalid!");
        }

        const autoDeleteChannelID = await guild.channels.fetch(mainconfig.AutoDeleteChannelID).catch(() => null);
        if (!autoDeleteChannelID) {
            throw new Error("The AutoDeleteChannelID value you provided in config/mainconfig.js is invalid!");
        }

        const donationChannelId = await guild.channels.fetch(mainconfig.DonationChannelID).catch(() => null);
        if (!donationChannelId) {
            throw new Error("The DonationChannelID value you provided in config/mainconfig.js is invalid!");
        }

        Object.values(mainconfig.LoggingChannelID).forEach(async (channelId) => {
            const channel = await guild.channels.fetch(channelId).catch(() => null);
            if (!channel) {
                throw new Error("One of the LoggingChannelID values you provided in config/mainconfig.js are invalid!");
            }
        });

        Object.values(mainconfig.SeverRoles).forEach(async (roleId) => {
            const role = await guild.roles.fetch(roleId).catch(() => null);
            if (!role) {
                throw new Error("One of the SeverRoles values you provided in config/mainconfig.js are invalid!");
            }
        });

        const k4itrunTicket = await guild.channels.fetch(mainconfig.OwnerInformation.OwnerTicketCat).catch(() => null);
        if (!k4itrunTicket) {
            throw new Error("The OwnerInformation.OwnerTicketCat value you provided in config/mainconfig.js is invalid!");
        }

        Object.values(mainconfig.OrdersChannelID).forEach(async (id) => {
            if (id === mainconfig.OrdersChannelID.TicketMessageID) {
                const channel = await guild.channels.fetch(mainconfig.OrdersChannelID.TicketChannelID).catch(() => null);
                if (!channel) return;

                const msg = channel.messages.fetch(id).catch(() => null);
                if (!msg) {
                    console.warn("Not a crash! But the OrdersChannelID.TicketMessageID value you provided in config/mainconfig.js is invalid!");
                } 

                return;
            }

            if (id === mainconfig.OrdersChannelID.OrderMessageID) {
                const channel = await guild.channels.fetch(mainconfig.OrdersChannelID.OrderMessageID).catch(() => null);
                if (!channel) return;

                const msg = channel.messages.fetch(id).catch(() => null);
                if (!msg) {
                    console.warn("Not a crash! But the OrdersChannelID.OrderMessageID value you provided in config/mainconfig.js is invalid!");
                } 

                return;
            }

            if (id === mainconfig.OrdersChannelID.ImgTicket) {
                const channel = await guild.channels.fetch(mainconfig.OrdersChannelID.ImgTicket).catch(() => null);
                if (!channel) return;

                const msg = channel.messages.fetch(id).catch(() => null);
                if (!msg) {
                    console.warn("Not a crash! But the OrdersChannelID.ImgTicket value you provided in config/mainconfig.js is invalid!");
                } 

                return;
            }

            if (id === mainconfig.OrdersChannelID.ImgOrder) {
                const channel = await guild.channels.fetch(mainconfig.OrdersChannelID.ImgOrder).catch(() => null);
                if (!channel) return;

                const msg = channel.messages.fetch(id).catch(() => null);
                if (!msg) {
                    console.warn("Not a crash! But the OrdersChannelID.ImgOrder value you provided in config/mainconfig.js is invalid!");
                } 

                return;
            }

            if (id === mainconfig.OrdersChannelID.ImgNode) {
                const channel = await guild.channels.fetch(mainconfig.OrdersChannelID.ImgNode).catch(() => null);
                if (!channel) return;

                const msg = channel.messages.fetch(id).catch(() => null);
                if (!msg) {
                    console.warn("Not a crash! But the OrdersChannelID.ImgNode value you provided in config/mainconfig.js is invalid!");
                } 

                return;
            }

            if (id === mainconfig.OrdersChannelID.ImgRules) {
                const channel = await guild.channels.fetch(mainconfig.OrdersChannelID.ImgRules).catch(() => null);
                if (!channel) return;

                const msg = channel.messages.fetch(id).catch(() => null);
                if (!msg) {
                    console.warn("Not a crash! But the OrdersChannelID.ImgRules value you provided in config/mainconfig.js is invalid!");
                } 

                return;
            }

            if (id === mainconfig.OrdersChannelID.FeaturesMessageID) {
                const channel = await guild.channels.fetch(mainconfig.OrdersChannelID.FeaturesMessageID).catch(() => null);
                if (!channel) return;

                const msg = channel.messages.fetch(id).catch(() => null);
                if (!msg) {
                    console.warn("Not a crash! But the OrdersChannelID.FeaturesMessageID value you provided in config/mainconfig.js is invalid!");
                } 

                return;
            }

            const channel = await guild.channels.fetch(id).catch(() => null);
            if (!channel) {
                throw new Error("One of the OrdersChannelID value you provided in config/mainconfig.js is invalid!");
            }
        });

        Object.values(mainconfig.SystemRolesMenu).forEach(async (id) => {
            if (id === mainconfig.SystemRolesMenu.EnglishLanguages) {
                const channel = await guild.channels.fetch(mainconfig.SystemRolesMenu.EnglishLanguages).catch(() => null);
                if (!channel) return;

                const msg = channel.messages.fetch(id).catch(() => null);
                if (!msg) {
                    console.warn("Not a crash! But the SystemRolesMenu.EnglishLanguages value you provided in config/mainconfig.js is invalid!");
                } 

                return;
            }

            if (id === mainconfig.SystemRolesMenu.GermanLanguages) {
                const channel = await guild.channels.fetch(mainconfig.SystemRolesMenu.GermanLanguages).catch(() => null);
                if (!channel) return;

                const msg = channel.messages.fetch(id).catch(() => null);
                if (!msg) {
                    console.warn("Not a crash! But the SystemRolesMenu.GermanLanguages value you provided in config/mainconfig.js is invalid!");
                } 

                return;
            }

            if (id === mainconfig.SystemRolesMenu.SpanishLanguages) {
                const channel = await guild.channels.fetch(mainconfig.SystemRolesMenu.SpanishLanguages).catch(() => null);
                if (!channel) return;

                const msg = channel.messages.fetch(id).catch(() => null);
                if (!msg) {
                    console.warn("Not a crash! But the SystemRolesMenu.SpanishLanguages value you provided in config/mainconfig.js is invalid!");
                } 

                return;
            }

            if (id === mainconfig.SystemRolesMenu.MaleGender) {
                const channel = await guild.channels.fetch(mainconfig.SystemRolesMenu.MaleGender).catch(() => null);
                if (!channel) return;

                const msg = channel.messages.fetch(id).catch(() => null);
                if (!msg) {
                    console.warn("Not a crash! But the SystemRolesMenu.MaleGender value you provided in config/mainconfig.js is invalid!");
                } 

                return;
            }

            if (id === mainconfig.SystemRolesMenu.FemaleGender) {
                const channel = await guild.channels.fetch(mainconfig.SystemRolesMenu.FemaleGender).catch(() => null);
                if (!channel) return;

                const msg = channel.messages.fetch(id).catch(() => null);
                if (!msg) {
                    console.warn("Not a crash! But the SystemRolesMenu.FemaleGender value you provided in config/mainconfig.js is invalid!");
                } 

                return;
            }

            if (id === mainconfig.SystemRolesMenu.OtherGender) {
                const channel = await guild.channels.fetch(mainconfig.SystemRolesMenu.OtherGender).catch(() => null);
                if (!channel) return;

                const msg = channel.messages.fetch(id).catch(() => null);
                if (!msg) {
                    console.warn("Not a crash! But the SystemRolesMenu.OtherGender value you provided in config/mainconfig.js is invalid!");
                } 

                return;
            }


            if (id === mainconfig.SystemRolesMenu.NewsPings) {
                const channel = await guild.channels.fetch(mainconfig.SystemRolesMenu.NewsPings).catch(() => null);
                if (!channel) return;

                const msg = channel.messages.fetch(id).catch(() => null);
                if (!msg) {
                    console.warn("Not a crash! But the SystemRolesMenu.NewsPings value you provided in config/mainconfig.js is invalid!");
                } 

                return;
            }

            if (id === mainconfig.SystemRolesMenu.PollPings) {
                const channel = await guild.channels.fetch(mainconfig.SystemRolesMenu.PollPings).catch(() => null);
                if (!channel) return;

                const msg = channel.messages.fetch(id).catch(() => null);
                if (!msg) {
                    console.warn("Not a crash! But the SystemRolesMenu.PollPings value you provided in config/mainconfig.js is invalid!");
                } 

                return;
            }

            if (id === mainconfig.SystemRolesMenu.ChangesPings) {
                const channel = await guild.channels.fetch(mainconfig.SystemRolesMenu.ChangesPings).catch(() => null);
                if (!channel) return;

                const msg = channel.messages.fetch(id).catch(() => null);
                if (!msg) {
                    console.warn("Not a crash! But the SystemRolesMenu.ChangesPings value you provided in config/mainconfig.js is invalid!");
                } 

                return;
            }

            if (id === mainconfig.SystemRolesMenu.DmsOpenState) {
                const channel = await guild.channels.fetch(mainconfig.SystemRolesMenu.DmsOpenState).catch(() => null);
                if (!channel) return;

                const msg = channel.messages.fetch(id).catch(() => null);
                if (!msg) {
                    console.warn("Not a crash! But the SystemRolesMenu.DmsOpenState value you provided in config/mainconfig.js is invalid!");
                } 

                return;
            }

            if (id === mainconfig.SystemRolesMenu.DmsAskState) {
                const channel = await guild.channels.fetch(mainconfig.SystemRolesMenu.DmsAskState).catch(() => null);
                if (!channel) return;

                const msg = channel.messages.fetch(id).catch(() => null);
                if (!msg) {
                    console.warn("Not a crash! But the SystemRolesMenu.DmsAskState value you provided in config/mainconfig.js is invalid!");
                } 

                return;
            }

            if (id === mainconfig.SystemRolesMenu.DmsClosedState) {
                const channel = await guild.channels.fetch(mainconfig.SystemRolesMenu.DmsClosedState).catch(() => null);
                if (!channel) return;

                const msg = channel.messages.fetch(id).catch(() => null);
                if (!msg) {
                    console.warn("Not a crash! But the SystemRolesMenu.DmsClosedState value you provided in config/mainconfig.js is invalid!");
                } 

                return;
            }


            const channel = await guild.channels.fetch(id).catch(() => null);
            if (!channel) {
                throw new Error("One of the SystemRolesMenu value you provided in config/mainconfig.js is invalid!");
            }
        });

        Object.values(mainconfig.ApplyTickets).forEach(async (id) => {
            const channel = await guild.channels.fetch(id).catch(() => null);
            if (!channel) {
                throw new Error("One of the ApplyTickets value you provided in config/mainconfig.js is invalid!");
            }
        });

        Object.values(mainconfig.TicketCategorys).forEach(async (id) => {
            const channel = await guild.channels.fetch(id).catch(() => null);
            if (!channel) {
                throw new Error("One of the TicketCategorys value you provided in config/mainconfig.js is invalid!");
            }
        });
    });
}