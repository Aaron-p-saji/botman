const discord = require('discord.js');
const db = require('quick.db');

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply(' You Dont Have Permission to Use This Command');

    const newPrefix = args[0]

    if(!newPrefix) return message.reply('Please Provide A New Prefix')

    if(newPrefix.length > 5) return message.reply('Prefix Cannot Be Too Long');

    message.channel.send(`New Prefix Set To ${newPrefix}`);
    db.set(`prefix_${message.guild.id}`, newPrefix);
}

module.exports.help = {
    name: `setPrefix`,
    aliases: ['setprefix']
}