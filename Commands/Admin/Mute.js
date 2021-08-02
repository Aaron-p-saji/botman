const Discord = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {
    
    // this code check if the member have the perm to mute or the bot hv the perm to mute ppl
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('You Donot have Permission');
let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username === args.slice(0).join(" ") || x.user.username === args[0])
let reason = args.slice(1).join("");
if(!reason) reason = "No Reason Given";

const MuteEmbed = new Discord.MessageEmbed()                                                                         //------------------------------------------------
      .setTitle('MEMBER MUTE')                                                               // From here EmBead Reason For Kicking and......
      .setDescription(`I Muted ${member} \nReason: ${reason}`)
      .setColor("#08c7c9")
      .setTimestamp()
      .setImage('https://cdn.discordapp.com/attachments/846230382977482799/869427082088833054/standard.gif')
      .setFooter(Client.user.tag, Client.user.displayAvatarURL());         //--------------------------------------------------------------

//it reorgnize the muted role and the member and add the muted and remove the member role
    let UnmutedRole = message.guild.roles.cache.get('846230382961754145'); // u put the muted role ID
    let verifiedRole = message.guild.roles.cache.get('846230382961754151'); // the member role ID
    if(UnmutedRole) {
        member.roles.add(UnmutedRole);
        member.roles.remove(verifiedRole);
// it will send this message once the bot mute the member
        message.reply(MuteEmbed);
    }

}

module.exports.help = {
    name: 'mute',
    aliases: ["MUTE", "MUte", "MUTe", "mutE", "muTE", "mUTE", "MuTe", "mUtE", "mUte"]
};