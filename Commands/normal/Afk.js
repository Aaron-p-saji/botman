const { author } = require('canvacord');
const discord = require('discord.js')
const db = require('quick.db')


module.exports.run = async (Client, message, args, prefix) => {
    

    let Cuser = message.mentions.users.first() || message.author;

    let avatar = Cuser.displayAvatarURL({size: 4096, dynamic: true})
   
    let prefixes = await db.fetch(`prefix_${message.guild.id}`);

    if(!message.content.startsWith(prefix)) return;
    
    const content = args.join(" ")

    const AFKFAIL = new discord.MessageEmbed()
    .setTitle('You Cannout Go AFK Without A Specific Reason')
    .setDescription(`Usage: ${prefixes}<Your Reason>`)
    .setColor("RANDOM")
    if(!content) return message.reply(AFKFAIL).then(msg => {
            setTimeout(() => msg.delete(AFKFAIL), 2000)
    })
    
    const AFKDONE = new discord.MessageEmbed()
    .setDescription(`<a:this:862155826130452501> **AFK** \n You Settle Down As AFK \n Reason: ${content}`)
    .setColor("RANDOM")
    .setTimestamp()
    .setFooter(Cuser.username, message.guild.iconURL())
    .setThumbnail(Cuser.displayAvatarURL({dynamic: true, size: 2048}));
    
    await db.set(`afk-${message.author.id}+${message.guild.id}`, content)
    
    message.channel.send(AFKDONE);
    setTimeout(() => message.delete(), 5000)
    
    
}


module.exports.help = {
    name: `afk`,
    aliases: []
};