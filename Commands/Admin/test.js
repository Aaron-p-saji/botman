const discord = require('discord.js')
const { MessageButton } = require("discord-buttons")

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return



let button = new MessageButton()
  .setStyle('blurple')
  .setLabel('My First Button!') 
  .setID('click_to_function') 

let button2 = new MessageButton()
  .setStyle('grey')
  .setLabel('Second Cool Button!') 
  .setID('second_button_function') 
  .setDisabled();

let row = new MessageActionRow()
  .addComponents(button, button2);

message.channel.send('Hello World!', row);
}

module.exports.help = {
    name: 'smart44',
    aliases: []
}