const express = require("express")
const app = express()

app.get("/", (req, res) => {
  res.send("Helllo Bot Online")
})

app.listen(3000, () => {
  console.log("Project Is Ready")
})




const Discord = require('discord.js');

const config = require('./config.json'); //connect with config.json

const Client = new Discord.Client({
    disableEveryone: true
}); // create a new discord client

Client.commands = new Discord.Collection(); //New System For Commands

const fs = require('fs');

const xpfile = require('./xp.json'); //connect with xp.json file
const {
    dir
} = require('console');
const {
    off
} = require('process');

const db = require('quick.db');

const fetch = require('node-fetch');

const snipes = new Discord.Collection();

Client.on('messageDelete', message => {
    snipes.set(message.channel.id, message)

    const LogChannel = Client.channels.cache.get('870936323886821398')
    const DeletedLog = new Discord.MessageEmbed()
    .setTitle("Deleted Message")
    .addField('Deleted by', `${message.author} - (${message.author.id})`)
    .addField("In", message.channel)
    .addField("Content", message.content)
    .setColor('RANDOM')
    .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
    try {
        LogChannel.send(DeletedLog)

    } catch (error) {
        console.log(' ')
    }

    if(message.mentions.users.first()) {
        if(message.channel.id === '870922925719552061') return;
        const embed = new Discord.MessageEmbed()
        .setTitle("Ghost Ping")
        .setDescription(`${message.author.tag} ghost pinged ${message.mentions.users.first()}`)
        .setColor("RANDOM")
        return message.channel.send(embed)
    }

})



require('discord-buttons')(Client)

const {
    MessageButton
} = require("discord-buttons")

Client.on('clickButton', async (button) => {
    if (button.id === 'dumbass') {
        button.defer()
    }
    if (button.id === 'smart') {
        button.reply.think(true)
        //To make your reply only send to the user who clicked the button, add true to the options param
        button.channel.send(`${button.clicker.user.tag} is a dumbass!`);

        const embed = new Discord.MessageEmbed()
            .setTitle("Neat")
            .setDescription("Now Press on the button below")
            .setColor("GREEN")

        const sub = new MessageButton()
            .setStyle("url")
            .setLabel("Subscribe")
            .setURL("https://youtube.com/UltraX1")
        button.reply.think(false)

        button.message.edit({
            button: sub,
            embed: embed
        })
    }

});

Client.aliases = new Discord.Collection(); // it creates a new function for our aliases

const Canvacord = require('canvacord');
const data = require('canvacord/src/Plugins');


Client.on("ready", async () => {
    console.log(`${Client.user.username} BOT Is Up`) //client login in console
    Client.user.setActivity("f! help", {
        type: "WATCHING"
    })
});






//Command Handlers

//get into the commands folder
fs.readdirSync('./Commands/').forEach(dir => {

    fs.readdir(`./Commands/${dir}`, (err, files) => { //in the commands folder we are checking the catagory

        if (err) throw err; //catch err

        var jsFile = files.filter(f => f.split(".").pop() === "js"); //checking the files extension is Javasript{.js}

        if (jsFile.length <= 0) { //If there is no comments in the file it will return
            console.log("Can't Find Any Commands");
            return;
        }

        jsFile.forEach(file => {

            var fileGet = require(`./Commands/${dir}/${file}`); //console the loaded comments
            console.log(`File ${file} was loaded`)


            try {
                Client.commands.set(fileGet.help.name, fileGet); //lets the commands run

                fileGet.help.aliases.forEach(alias => { //it search the commands Folder it has any aliases
                    Client.aliases.set(alias, fileGet.help.name);
                })

            } catch (err) { //check for error
                return console.log(err);
            }
        });
    });
});








// Welcome message
Client.on("guildMemberAdd", member => {
    const welcomeChannel = member.guild.channels.cache.find(channel => channel.name === 'welcome')
    welcomeChannel.send(`Welcome! ${member} to our server hope you enjoy your stay`)
})

Client.on("guildMemberAdd", member => {
    const welcomeChannel = member.guild.channels.cache.find(channel => channel.name === '『lᴇᴀᴠᴇʀs』')
    welcomeChannel.send(`${member} just left the server`)
})







Client.on("message", async (message, guild) => {

    if(message.author.Client) return;
    if(message.channel.type === "dm") {
        const dmEmbed = new Discord.MessageEmbed()
        .setTitle('New DM')
        .setColor("RANDOM")
        .setTimestamp()
        .setDescription(`**User:** ${message.author.tag}\n**User ID:** ${message.author.id}\n**At:** ${new Date()}\n\n**Content:** \`\`\`${message.content}\`\`\``)
        
        const DMC = Client.channels.cache.get('870928357246763048')
        DMC.send(dmEmbed)
    }

    if(message.channel.id === '870922925719552061') {
        if(message.author.bot) return;
        fetch.default(`https://api.monkedev.com/fun/chat?msg=${message.content}&uid=${message.author.id}`)
        .then(res => res.json())
        .then(data => {
            message.channel.send(data.response)
        })
    }

    if(message.channel.id === '870922925719552061') {
    if(message.mentions.users.first()) return message.channel.send("Please do not ping people").then(msg => {
        message.delete().then(msg => {
            setTimeout(() => {msg.delete()}, 5000)
        })
        })
    }

    // deleting his afk if he send a msg

    if (db.has(`afk-${message.author.id}+${message.guild.id}`)) { // if he has afk
        const oldReason = db.get(`afk-${message.author.id}+${message.guild.id}`) // get the reason 
        await db.delete(`afk-${message.author.id}+${message.guild.id}`) // delete it after u get it
        const OutAFKEMBED = new Discord.MessageEmbed()
            .setTitle(`You aren't afk anymore, that was the`)
            .setDescription(`Reason: ${oldReason}`)
            .setColor("RANDOM")

        message.reply(OutAFKEMBED) // send this msg
    }

    //CHECKING IS SOMEONE MENTION MENTION THE AFK PERSON
    if (message.mentions.members.first()) { // if someone mentioned the person
        if (db.has(`afk-${message.mentions.members.first().id}+${message.guild.id}`)) { // db will check if he is afk

            const isAFKEMBED = new Discord.MessageEmbed()
                .setDescription(message.mentions.members.first().user.tag + " : " + db.get(`afk-${message.mentions.members.first().id}+${message.guild.id}`))
                .setColor("RANDOM")

            message.channel.send(isAFKEMBED) // if yes, it gets from the db the afk msg and send it
        }
    }


    let prefix;

    let prefixes = await db.fetch(`prefix_${message.guild.id}`);
    if (prefixes == null) {
        prefix = "f!"; // default prefix
    } else {
        prefix = prefixes;
    }
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);


    let commands = Client.commands.get(cmd.slice(prefix.length)) || Client.commands.get(Client.aliases.get(cmd.slice(prefix.length)));
    if (commands) commands.run(Client, message, args, prefix);



    xp(message)
    if(message.content.startsWith(`${prefix}rank`)) {
    if (message.author.bot) return;
    var user = message.mentions.users.first() || message.author;
    var level = db.fetch(`guild_${message.guild.id}_level_${user.id}`) || 0;
    var currentxp = db.fetch(`guild_${message.guild.id}_xp_${user.id}`) || 0;
    var xpNeeded = level * 500 + 500
    const rankCard = new Canvacord.Rank()
        .setAvatar(user.displayAvatarURL({format: 'png', dynamic: true}))
        .setCurrentXP(db.fetch(`guild_${message.guild.id}_xp_${user.id}`) || 0)
        .setRequiredXP(xpNeeded)
        .setStatus(user.presence.status)
        .setLevel(db.fetch(`guild_${message.guild.id}_level_${user.id}`) || 0)
        .setRank(1, 'RANK', true)
        .setProgressBar("#a81d16", "COLOR")
        .setOverlay("#000000")
        .setUsername(user.username)
        .setDiscriminator(user.discriminator)
        .setBackground("IMAGE", "https://cdn.discordapp.com/attachments/846230383405957132/870331665577287680/kaztro.jpg")
        rankCard.build()
        .then(data => {
            const attach = new Discord.MessageAttachment(data, `${user.username}_rank.png`)
            message.channel.send(attach)
        })

    }

    function xp(message) {
        if(message.author.bot) return
        const randomNumber = Math.floor(Math.random() * 10) + 15;
        db.add(`guild_${message.guild.id}_xp_${message.author.id}`, randomNumber) 
        db.add(`guild_${message.guild.id}_xptotal_${message.author.id}`, randomNumber)
        var level = db.get(`guild_${message.guild.id}_level_${message.author.id}`) || 1
        var xp = db.get(`guild_${message.guild.id}_xp_${message.author.id}`)
        var xpNeeded = level * 500;
        if(xpNeeded < xp){
            var newLevel = db.add(`guild_${message.guild.id}_level_${message.author.id}`, 1) 
            db.subtract(`guild_${message.guild.id}_xp_${message.author.id}`, xpNeeded)
            message.channel.send(`Congrats ${message.author}, you leveled up, you are now level ${newLevel}`)
        }
    }
       
})

Client.login(config.token); //login to our bot