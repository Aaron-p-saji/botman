const discord = require('discord.js')


module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;

    const Title =  args.slice(0).join(" ").split("|")
    const Description = args.slice(1).join(" ").split("|");
    const Footer = args.slice(2).join("").split("|");

    if(!Title) return message.reply('LAMAO You Must Set A Title \n Usage: \'f!embed <Title> <Description> <Footer> <tumbnail url> <Image url> <any link> ')
    if(!Description) return message.reply('LAMAO You Must Set A Description \n Usage: \'f!embed <Title> <Description> <Footer> <tumbnail url> <Image url> <any link> ')
    
    const UltraX = new discord.MessageEmbed()
    .setTitle(Title) // sets the title for the embed
    .setDescription(Description) // sets the description
    .setFooter(Footer) // sets a footer
    .setAuthor(message.member.user.tag , message.author.displayAvatarURL()) // set the author with his avatar
    .setColor('#00ff00') // color
    .setTimestamp() // put when the msg got sent
    

    message.channel.send(UltraX) // sends the embed

}


module.exports.help = {
    name: `embed`,
    aliases: []
};