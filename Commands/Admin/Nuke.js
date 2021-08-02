const discord = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {

    if(!message.content.startsWith(prefix)) return;

    // if the member don't have this perm return by sending this msg
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('You dont have the perms for the nuke command')

    var Name = message.member.id;


    // getting the channel's id that is gonna be nuked
    var channel = Client.channels.cache.get(message.channel.id)

    // getting the position of the channel by the category
    var posisi = channel.position

    const NukeEmbed = new discord.MessageEmbed()                                                                         //------------------------------------------------
      .setTitle('Adm Cmd : CHANNEL NUKED')                                                               // From here EmBead Reason For Kicking and......
      .setDescription(`**Nuked The By Admin** <@${Name}>! `)
      .setColor("#ff0000")
      .setTimestamp()
      .setImage('https://cdn.discordapp.com/attachments/869857871997841428/869858095726202910/tenor.gif')
      .setFooter(message.member.user.tag , message.member.user.displayAvatarURL());   

   // clonning the channel
    channel.clone().then((channel2) => {
        
        // sets the position of the new channel
        channel2.setPosition(posisi)

        // deleting the nuked channel
        channel.delete()

        // sending a msg in the new channel
        channel2.send(NukeEmbed)
    })
}
    


module.exports.help = {
    name: `nuke`,
    aliases: ['destroy']
}