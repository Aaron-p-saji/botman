const Discord = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.member.hasPermission('KICK_MEMBERS', 'ADMINISTRATOR'))   //checking if the user has permission
    message.reply("You Cannot kick A Member 'Cause You Doesn't Have Permission")
    if (!message.guild.me.hasPermission('KICK_MEMBERS', 'ADMINISTRATOR')) 
    message.reply('You Should Give Me kick Member Permission');
    else {
        if(!message.guild) return;
        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        
        if(user) {
            const member = message.guild.member(user);

            if (member) {

                member
                    .kick({
                        reason: 'You Were Bad',
                    })
                     .then(() => {

                        message.reply(`Sucessfully Kicked ${user}`);
                     })
                      .catch(err => {
                          message.reply(`I Was Unable To Kick ${user}`);

                          console.log(err);
                      });
            } else {

                message.reply(`${user} Is Not In This Server`)
            }
        } else {

            message.reply("You Didn't Mentioned The User To Kick");
        }
    };
}

module.exports.help = {
    name: 'kick',
    aliases: ["Kick", "kick", "KIck", "KICk", "KICK", "kICK", "kiCK", "kicK", "KicK", "KiCk", "kIcK", "kiCk"]
};