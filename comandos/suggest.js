const Discord = require('discord.js');
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js')
const db = require("megadb")
const suggest = new db.crearDB("sugerencias")

module.exports = {
  name: "suggest",
  alias: ["sugerir"],
  async execute (client, message, args) {

    const suge = args.slice(0).join(' ')
    let canal = await suggest.obtener(message.guild.id)
    let channel = client.channels.cache.get(canal)

    if(message.channel.id !== '915310494758359092') return message.reply("**❌ | Este comando solo se puede usar en #sugerencia**")
    if(!channel) return message.reply("No hay ningún canal de sugerencias establecido")
    if(!suge) return message.reply("Escribe tu sugerencia")

    let embed = new Discord.MessageEmbed()
    .setTitle("¡Sugerencia!")
    .setDescription(`${suge}`)
    .setFooter(`Sugerido por: ${message.author.tag}`)
    .setAuthor(client.user.username, client.user.avatarURL())

    channel.send({ embeds: [embed] }).then(m => {
        m.react('✅')
        m.react('❔')
        m.react('❌')
    })

    message.reply(`Se envió correctamente tu sugerencia, puedes mirarla en ${channel}`)




  }

}