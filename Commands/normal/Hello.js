const Discord = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {

    if(!message.content.startsWith(prefix)) return;

    message.channel.send(`Hello I Am Online`)

}

module.exports.help = {
    name: 'hello',
    aliases: ["hai", "hi", "Hey", "hey", "Hello", "HELLO", "HAI", "HI", "HEY"]
};