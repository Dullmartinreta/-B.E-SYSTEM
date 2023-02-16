const Discord = require('discord.js');
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js')

module.exports = {
  name: "cmd",
  alias: ["comandos"],
  async execute (client, message, args) {

    const start = new Discord.MessageEmbed()
    .setTitle("[B.E] SYSTEM | MENU DE COMANDOS")
    .setAuthor(client.user.username, client.user.avatarURL(), "https://discord.gg/am7DSe4A4Q")
    .setDescription ('Selecciona la opcion que necesites.\n\nCabe aclarar que los "Legacy prefix" commands funcionan con el prefijo, los "Application commands" también conocidos como "SlashCommands" funcionan usando el simbolo "/"\n\nEl "Nombre" del comando es el activador principal para el mismo, el "Alias" es su activador alterno, es decir, colocando el nombre o el alias el comando será realizado de la misma manera.')
    .addField("Actualmente tengo:", "`9` Comandos", false)
    .addField("Mi prefijo:", "be!")
    .addField("Comandos programados por:", "MartinLuksic#4859")
    .setThumbnail(client.user.avatarURL())
    .setFooter("[B.E] SYSTEM programado por MartinLuksic#4859")
    .setColor("RANDOM")
    .setTimestamp()

    const row = new MessageActionRow()
    .addComponents(
        new MessageSelectMenu()
        .setCustomId('Select')
        .setPlaceholder('Selecciona una categoria')
        .addOptions([
            {
                label: 'Avatar',
                description: 'Muestra la información del comando "avatar"',
                value: 'avcmd',
                emoji: '👨'

            },
            {
                label: 'Cmd',
                description: 'Muestra la información del comando "cmd"',
                value: 'cmdinfo',
                emoji: '🤖'

            },
            {
                label: 'Cuenta corriente',
                description: 'Muestra la información del comando "cc"',
                value: 'ccinfo',
                emoji: '💸'

            },
            {
                label: 'Info',
                description: 'Muestra la información del comando "info"',
                value: 'infocmd',
                emoji: '🏦'

            },
            {
                label: 'Say',
                description: 'Muestra la información del comando "say"',
                value: 'saycmd',
                emoji: '💬'
            },
            {
                label: 'Help',
                description: 'Muestra la información del comando "help"',
                value: 'helpcmd',
                emoji: '🤝'
            },
            {
                label: 'Server info',
                description: 'Muestra la información del comando "serverinfo"',
                value: 'svicmd',
                emoji: '🏢'
            },
            {
                label: 'Sugerir',
                description: 'Muestra la información del comando "sugerir"',
                value: 'sgcmd',
                emoji: '🙋‍♂️'
            },
            {
                label: 'Ping (Pong!)',
                description: 'Muestra la información del comando "Ping"',
                value: 'pingcmd',
                emoji: '🏓'
            }
        ])
    )

   message.reply({ embeds: [start], components: [row]}).then(async(m) => {

    const collector = m.createMessageComponentCollector({ filter: i => i.user.id === message.author.id });
    collector.on("collect", async(i) => {
        if(i.values[0] === "avcmd"){
            i.update({ embeds: [avembed]})
        }
        if(i.values[0] === "cmdinfo"){
            i.update({ embeds: [cmdembed]})
        }
        if(i.values[0] === "ccinfo"){
            i.update({ embeds: [ccembed]})
        }
        if(i.values[0] === "infocmd"){
            i.update({ embeds: [infoembed]})
        }
        if(i.values[0] === "saycmd"){
            i.update({ embeds: [sayembed]})
        }
        if(i.values[0] === "helpcmd"){
            i.update({ embeds: [helpembed]})
        }
        if(i.values[0] === "svicmd"){
            i.update({ embeds: [sviembed]})
        }
        if(i.values[0] === "sgcmd"){
            i.update({ embeds: [sgembed]})
        }
        if(i.values[0] === "pingcmd"){
            i.update({ embeds: [pingembed]})
        }
    })
    const avembed = new Discord.MessageEmbed()
    .setTitle("Avatar")
    .setDescription("Muestra la imagen de tu avatar o la de otra persona.")
    .addField("Nombre:", "avatar")
    .addField("Alias:", "pfp, fotodeperfil, fdp")
    .addField("Tipo de comando:", "Legacy prefix")
    .setFooter("[B.E] SYSTEM programado por MartinLuksic#4859")
    .setColor("RANDOM")
    .setTimestamp()

    const cmdembed = new Discord.MessageEmbed()
    .setTitle("Cmd")
    .setDescription("Muestra una lista con información más completa de los comandos **públicos**.")
    .addField("Nombe:", "cmd")
    .addField("Alias:", "comandos")
    .addField("Tipo de comando:", "Legacy prefix")
    .setFooter("[B.E] SYSTEM programado por MartinLuksic#4859")
    .setColor("RANDOM")
    .setTimestamp()

    const ccembed = new Discord.MessageEmbed()
    .setTitle("Cuenta corriente")
    .setDescription("Muestra la información de tu cuenta corriente. (COMANDO NO HABILITADO POR EL MOMENTO")
    .addField("Nombe:", "cc")
    .addField("Alias:", "cuenta-corriente")
    .addField("Tipo de comando:", "Legacy prefix")
    .setFooter("[B.E] SYSTEM programado por MartinLuksic#4859")
    .setColor("RANDOM")
    .setTimestamp()

    const infoembed = new Discord.MessageEmbed()
    .setTitle("Info")
    .setDescription("Muestra los links oficiales de **[CL] Banco estado RBX**.")
    .addField("Nombe:", "info")
    .addField("Alias:", "información")
    .addField("Tipo de comando:", "Legacy prefix")
    .setFooter("[B.E] SYSTEM programado por MartinLuksic#4859")
    .setColor("#RANDOM")
    .setTimestamp()

    const sayembed = new Discord.MessageEmbed()
    .setTitle("Say")
    .setDescription("El bot dice lo que tu escribas, borrando tu mensaje.")
    .addField("Nombe:", "say")
    .addField("Alias:", "decir")
    .addField("Tipo de comando:", "Legacy prefix")
    .setFooter("[B.E] SYSTEM programado por MartinLuksic#4859")
    .setColor("RANDOM")
    .setTimestamp()

    const helpembed = new Discord.MessageEmbed()
    .setTitle("Help")
    .setDescription("Desplega una lista con información de **[CL] Banco estado RBX** y **[BE] SYSTEM**.")
    .addField("Nombe:", "help")
    .addField("Alias:", "ayuda")
    .addField("Tipo de comando:", "Legacy prefix")
    .setFooter("[B.E] SYSTEM programado por MartinLuksic#4859")
    .setColor("RANDOM")
    .setTimestamp()

    const sviembed = new Discord.MessageEmbed()
    .setTitle("Server info")
    .setDescription("Se desplega una lista con información actual del servidor de discord.")
    .addField("Nombe:", "server-info")
    .addField("Alias:", "serverinfo, informacion-server, servidor-info")
    .addField("Tipo de comando:", "Legacy prefix")
    .setFooter("[B.E] SYSTEM programado por MartinLuksic#4859")
    .setColor("RANDOM")
    .setTimestamp()
    
    const sgembed = new Discord.MessageEmbed()
    .setTitle("Sugerir")
    .setDescription("Envía una sugerencia al canal de Sugerencia para votación general, solo puede ser usado en #sugerencia")
    .addField("Nombe:", "suggest")
    .addField("Alias:", "sugerir")
    .addField("Tipo de comando:", "Legacy prefix")
    .setFooter("[B.E] SYSTEM programado por MartinLuksic#4859")
    .setColor("RANDOM")
    .setTimestamp()

    const pingembed = new Discord.MessageEmbed()
    .setTitle("Ping (Pong!)")
    .setDescription("El bot muestra cuanto se demoró en responder (en ms)")
    .addField("Nombe:", "Ping")
    .addField("Alias:", "N/A")
    .addField("Tipo de comando:", "Application command/Slash command")
    .setFooter("[B.E] SYSTEM programado por MartinLuksic#4859")
    .setColor("RANDOM")
    .setTimestamp()
   })

  }

}
