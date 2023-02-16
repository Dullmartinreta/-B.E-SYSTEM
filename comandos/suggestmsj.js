const Discord = require('discord.js');
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js')

module.exports = {
    name: "smsj",
    alias: ["mensaje"],
    execute (client, message, args) {

    
        const embed = new Discord.MessageEmbed()
        .setTitle("¿Cómo usarme?")
        .setDescription("Para poder usarme deberás usar el siguiente formato")
        .addField("Formato a utilizar:", "be!sugerir [Sugerencia]")
        .addField("¿Donde podré ver mi sugerencia?", "Tu sugerencia podrá ser vista y votada de manera general en el canal #sugerencias, el cual podrás votar por tu sugerencia o votar por la de otras personas de acuerdo a **TU OPINIÓN PERSONAL**\n\n**Debes tener en  cuenta que:** Otras personas no pueden decidir por usted ni usted por la opinión de otras personas.")
        .setFooter("[B.E] SYSTEM | Programador por MartinLuksic#4859")
        .setColor("GOLD")

        message.delete()
        message.channel.send({ embeds: [embed] })

    }
}