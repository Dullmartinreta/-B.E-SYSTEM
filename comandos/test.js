const Discord = require('discord.js');
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js')

module.exports = {
    name: "test",
    alias: ["prueba"],
    execute (client, message, args) {
    
        const embed = new Discord.MessageEmbed()
        .setTitle("Solo es un comienzo")
        .setDescription("¡Más comandos prontos!")

        message.channel.send({ embeds: [embed] })

    }
}