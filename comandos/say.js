const Discord = require('discord.js');
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js')

module.exports = {
    name: "say",
    alias: ["decir"],
    execute (client, message, args) {
    
        const escribe = args.slice(0).join(' ')
        if(!escribe) return message.channel.send("**❌| No especificaste un mensaje para decir**")
        message.delete()
        message.channel.send(escribe)

    }
}