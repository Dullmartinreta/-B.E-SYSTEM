const Discord = require('discord.js');
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js')
const db = require("megadb")
const suggest = new db.crearDB("sugerencias")


module.exports = {
    name: "setsuggest",
    alias: ["establecer-sugerencia", "set-suggest"],
    execute (client, message, args) {
    
        const id = args[0]
        if(!id) return message.reply("**❌| ¡Este canal no es valido para sugerir!**")

        const canal = message.mentions.channels.first() || client.channel.cache.get(id)
        if(!canal) return message.reply("❌| ¡Este canal no es un canal valido!")

        let canalservidor = message.guild.channels.resolve(canal.id)
        if(!canalservidor) return message.reply("❌| Debes mencionar un canal del servidor")

        suggest.establecer(message.guild.id, canal.id)

        message.reply(`**✅ | El canal de sugerencias se actualizó a** ${canal.name}`)


    }
}