const discord = require('discord.js')



module.exports.run = async (Client, message, args, prefix) => {
    
    if(!message.content.startsWith(prefix)) return; // this makes sure that the cmd starts with the prefix

    let user = message.mentions.users.first() || message.author;

    let avatar = user.displayAvatarURL({size: 4096, dynamic: true})

const PingEmbed = new discord.MessageEmbed() //------------------------------------------------                                                            // From here EmBead Reason For Kicking and......
    .setDescription('**Finding User.**')
    .setColor("#ff0000")


const PingEmbed1 = new discord.MessageEmbed() //------------------------------------------------                                                            // From here EmBead Reason For Kicking and......
    .setDescription('**Finding User..**')
    .setColor("#ffe600")

const PingEmbed2 = new discord.MessageEmbed() //------------------------------------------------                                                            // From here EmBead Reason For Kicking and......
    .setDescription('**Finding User...**')
    .setColor("#66ff00")

const PingEmbed3 = new discord.MessageEmbed() //------------------------------------------------                                                            // From here EmBead Reason For Kicking and......
    .setDescription('**User Found**')
    .setColor("#ff0000")

const PingEmbed4 = new discord.MessageEmbed() //------------------------------------------------                                                            // From here EmBead Reason For Kicking and......
    .setDescription('**Extracting Avatar .**')
    .setColor("#ff0000")

    const PingEmbed5 = new discord.MessageEmbed() //------------------------------------------------                                                            // From here EmBead Reason For Kicking and......
    .setDescription('**Extracting Avatar ..**')
    .setColor("#ffe600")

    const PingEmbed6 = new discord.MessageEmbed() //------------------------------------------------                                                            // From here EmBead Reason For Kicking and......
    .setDescription('**Extracting Avatar ...**')
    .setColor("#66ff00")

const PingEmbed7 = new discord.MessageEmbed() //------------------------------------------------                                                            // From here EmBead Reason For Kicking and......
.setDescription('Avatar Send to your Dm')
.setColor("#ffe600")

const PingEmbed8 = new discord.MessageEmbed() //------------------------------------------------                                                            // From here EmBead Reason For Kicking and......
.setDescription('Avatar Send to your Dm')
.setColor("#ffe600")

    
message.channel.send(PingEmbed).then(msg => {
    const Ping = msg.createdTimestamp - message.createdTimestamp;
    const EPingEmbed = new discord.MessageEmbed() //------------------------------------------------                                                            // From here EmBead Reason For Kicking and......
        .setDescription(`${message.member.id} We Have to Send This As A Dm Because it May Be Inappropriate`)
        .setColor("#ff0000")
        


    msg.edit(PingEmbed1).then(msg => {
        msg.edit(PingEmbed2).then(msg => {
            msg.edit(PingEmbed3).then(msg => {
                msg.edit(PingEmbed4).then(msg => {
                    msg.edit(PingEmbed5).then(msg => {
                        msg.edit(PingEmbed6).then(msg => {
                            msg.edit(PingEmbed7).then(msg => {
                                msg.edit(PingEmbed8).then(msg => {
                                    msg.edit(EPingEmbed).then(msg => {
                                        setTimeout(() => message.delete())
                                    })
                                })
                            })
                        })
                    })
            })
            })
        })
})
})

    const embed = new discord.MessageEmbed()
    .setTitle(`${user.tag}'s Avatar`)
    .setURL(avatar)
    .setImage(avatar)
    .setColor('RANDOM')
    .setFooter(`${user.tag}'s Avatar`)
        message.author.send(embed);
}



module.exports.help = {
    name: `avatar`,
    aliases: ["pfp"]
}