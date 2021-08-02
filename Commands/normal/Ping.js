const discord = require('discord.js');
const Client = new discord.Client();

module.exports.run = async (Client, message, args, prefix) => {

    if (!message.content.startsWith(prefix)) return;

    const PingEmbed = new discord.MessageEmbed() //------------------------------------------------                                                            // From here EmBead Reason For Kicking and......
        .setDescription('**Finding this bot ping.**')
        .setColor("#ff0000")


    const PingEmbed1 = new discord.MessageEmbed() //------------------------------------------------                                                            // From here EmBead Reason For Kicking and......
        .setDescription('**Finding this bot ping..**')
        .setColor("#ff0000")

    const PingEmbed2 = new discord.MessageEmbed() //------------------------------------------------                                                            // From here EmBead Reason For Kicking and......
        .setDescription('**Finding this bot ping...**')
        .setColor("#ff0000")

    const PingEmbed3 = new discord.MessageEmbed() //------------------------------------------------                                                            // From here EmBead Reason For Kicking and......
        .setDescription('**Finding this bot ping....**')
        .setColor("#ff0000")


    message.channel.send(PingEmbed).then(msg => {
        const Ping = msg.createdTimestamp - message.createdTimestamp;
        const EPingEmbed = new discord.MessageEmbed() //------------------------------------------------                                                            // From here EmBead Reason For Kicking and......
            .setDescription(`**The Ping of the bot is** ${Ping}**ms!**`)
            .setColor("#ff0000")


        msg.edit(PingEmbed1).then(msg => {
            msg.edit(PingEmbed2).then(msg => {
                msg.edit(PingEmbed3).then(msg => {
                    msg.edit(PingEmbed1).then(msg => {
                        msg.edit(PingEmbed2).then(msg => {
                            msg.edit(EPingEmbed).then(msg =>  {
                                setTimeout(() => message.delete(), 2000)
                            })
                        })
                })
                })
            })
    })
    })
}

module.exports.help = {
    name: `ping`,
    aliases: ['ms', 'lantency', 'MS', 'PING']
}