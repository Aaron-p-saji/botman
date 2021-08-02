const Discord = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {
    
    // this code check if the member have the perm to mute or the bot hv the perm to mute ppl
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send;
let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username === args.slice(0).join(" ") || x.user.username === args[0])
if(member.hasPermission(['ADMINISTRATOR']) && !message.member.hasPermission('ADMINISTRATOR')) return;

const UnMuteEmbed = new Discord.MessageEmbed()                                                                         //------------------------------------------------
      .setTitle('MEMBER UNMUTE')
      .setDescription(`Sucessfully UnMuted ${member}`)                                                               
      .setColor("#08c7c9")
      .setTimestamp()
      .setImage('https://cdn.discordapp.com/attachments/846230382977482799/869428168216424478/unmute.gif')
      .setFooter(Client.user.tag, Client.user.displayAvatarURL());         //--------------------------------------------------------------

//it reorgnize the muted role and the member and add the muted and remove the member role
    let mutedRole = message.guild.roles.cache.get('846230382961754145'); // u put the muted role ID
    let verifiedRole = message.guild.roles.cache.get('846230382961754151'); // the member role ID
    if(mutedRole) {
        member.roles.remove(mutedRole);
        member.roles.add(verifiedRole);
// it will send this message once the bot mute the member
        message.reply(UnMuteEmbed);
    }

}

module.exports.help = {
    name: 'unmute',
    aliases: ["UNMUTE", "UnMUte", "UNMUTe", "uNmutE", "UnmuTE", "UNmUTE", "uNMuTe", "uNmUtE"]
};