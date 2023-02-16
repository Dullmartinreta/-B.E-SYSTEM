const Discord = require('discord.js');
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js')

module.exports = {
  name: "2023",
  alias: ["añonuevo"],
  execute (client, message, args) {

    const embed = new Discord.MessageEmbed()
    .setTitle("¡Feliz año nuevo!")
    .setDescription("¡Feliz año nuevo a todo el personal bancario, clientes y por su puesto, a cada uno de ustedes.\n\nGracias por el apoyo recibido a [CL] Banco Estado y el progreso que hemos logrado realiado en el año 2022, un agradecimiento para absolutamente todos ustedes por lograr que el Banco sea como lo conocemos\n\n¡Muchas gracias y feliz 2023!\n\nAtte: Consejo ejecutivo Banco estado")
    .setImage("https://media.glamour.mx/photos/6190d768a6e030d64810aeb4/16:9/w_2560%2Cc_limit/213021.jpg")
    .setFooter("¡Feliz año nuevo! 🎉 | Programado por MartinLuksic#4859")
    .setColor("GOLD")

    message.channel.send({ embeds: [embed] })


  }

}