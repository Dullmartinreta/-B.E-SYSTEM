const Discord = require('discord.js');
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton, PermissionFlagsBits} = require('discord.js')

module.exports = {
  name: "md",
  alias: ["mensaje-directo, dm"],
  execute (client, message, args) {

    if(message.author.id !== '843948478614077480') return message.channel.send("**❌ | No estás autorizado para utilizar este comando.**")
    const userID = args[0]
    if(!userID) return message.channel.send("**❌ | ¡Pon una ID o menciona a un usuario!**")
    const user = message.mentions.members.first() || message.guild.members.cache.get(userID)
    const mensaje = args.slice(1).join(" ")
    if(!mensaje) return message.reply("**❌ | ¡Escribir un mensaje es OBLIGATORIO!**")
    if(!user) return message.reply("**❌ | No se encontró al usuario**")

    user.send(mensaje)
    message.channel.send("**✅ | ¡Mensaje enviado correctamente!**")


  }

}
