const Discord = require('discord.js');
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js')

module.exports = {
  name: "laestatuasehaalzado",
  alias: ["la-estatua-se-ha-alzado", "descanza-en-paz-José"],
  execute (client, message, args) {

    if(message.author.id !== "843948478614077480") return message.channel.send("**❌| Este comando no existe**")

    const embed = new Discord.MessageEmbed()
    .setTitle(`"La estatua se ha alzado"`)
    .setDescription("Buenas tardes a todos los clientes, personal bancario, gerencia y directorio...\n\nHoy es un día pésimo para nuestro banco, debido que, a diversas causas, problemas personales y salud. Nuestro fundador JoséIgnLuksic quien ha llevado nuestro Banco a su tope, con su sacrificio y esfuerzo total en mantener esta comunidad a salvo y activa, ha fallecido.\n\nPersonalmente, yo, Dullmartinreta, siento un destrozo por haber perdido tal Camarada, pero esto no significa que será el fin. Banco estado seguirá funcionando correctamente pero suspenderemos actividades por nuestra gigantesca perdida, siempre te extrañaremos, JoséIgnLuksic.\n\nCuando sea posible el traspaso efectivo de los grupos a mi personam, asumiré como el nuevo Presidente de Banco, no dejaremos morir este proyecto soñado por nuestro fundador, llevaremos su legado tanto aquí y nuestra Bloodline la Familia Luksic a lo más alto posible, pero requerimos de su ayuda para poder lograrlo.\n\nSin nada más que decir, Banco estado está de luto, descanza en paz José...")
    .setFooter("🕊JoséIgnLuksic | 2007 - 2022🕊")
    .setColor("#000000")

    message.channel.send({ embeds: [embed]})



  }

}