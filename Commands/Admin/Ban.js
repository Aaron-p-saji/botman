const Discord = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.member.hasPermission('BAN_MEMBERS', 'ADMINISTRATOR'))   //checking if the user has permission
    message.reply("You Cannot Ban A Member 'Cause You Doesn't Have Permission")
    if (!message.guild.me.hasPermission('BAN_MEMBERS', 'ADMINISTRATOR')) 
    message.reply('You Should Give Me Ban Member Permission');
    else {
        if(!message.guild) return;
        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        
        if(user) {
            const member = message.guild.member(user);

            if (member) {

                member
                    .ban({
                        reason: 'You Were Bad',
                    })
                     .then(() => {

                        message.reply(`Sucessfully Banned ${user}`);
                     })
                      .catch(err => {
                          message.reply(`I Was Unable To Ban ${user}`);

                          console.log(err);
                      });
            } else {

                message.reply(`${user} Is Not In This Server`)
            }
        } else {

            message.reply("You Didn't Mentioned The User To Ban");
        }
    };
}

module.exports.help = {
    name: 'ban',
    aliases: ["Ban", "ban", "BAn", "baN", "BaN", "bAn"]
};