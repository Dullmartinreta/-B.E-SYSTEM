const Discord = require('discord.js');
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js')

module.exports = {
  name: "help",
  alias: ["ayuda"],
  async execute (client, message, args) {

    const start = new Discord.MessageEmbed()
    .setTitle("[B.E] SYSTEM | MENU DE AYUDA")
    .setAuthor(client.user.username, client.user.avatarURL(), "https://discord.gg/am7DSe4A4Q")
    .setDescription ("Selecciona la opcion que necesites")
    .addField("Actualmente tengo:", "`9` Comandos", false)
    .addField("Mi prefijo:", "be!")
    .addField("Presidente de Banco", "JoséIgnLuksic#2227")
    .addField("Vicepresidente de Banco", "MartinLuksic#4859")
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
                label: 'Información del bot',
                description: 'Muestra la información del bot',
                value: 'botinfo',
                emoji: '🤖'

            },
            {
                label: 'Información del Banco',
                description: 'Muestra la información del banco y su personal',
                value: 'info',
                emoji: '🏦'

            },
            {
                label: 'Comandos',
                description: 'Muestra la lista de comandos disponibles',
                value: 'cmd',
                emoji: '🔢'

            },
            {
                label: 'Trabajos disponibles',
                description: 'Muestra la lista de trabajos disponibles',
                value: 'work',
                emoji: '💼'

            },
        ])
    )

   message.reply({ embeds: [start], components: [row]}).then(async(m) => {

    const collector = m.createMessageComponentCollector({ filter: i => i.user.id === message.author.id });
    collector.on("collect", async(i) => {
        if(i.values[0] === "botinfo"){
            i.update({ embeds: [biembed]})
        }
        if(i.values[0] === "info"){
            i.update({ embeds: [iembed]})
        }
        if(i.values[0] === "cmd"){
            i.update({ embeds: [cmdembed]})
        }
        if(i.values[0] === "work"){
            i.update({ embeds: [wembed]})
        }
    })
    const biembed = new Discord.MessageEmbed()
    .setTitle("Información del bot")
    .setDescription("[B.E] SYSTEM es un bot programado por `MartinLuksic (Dullmartinreta)` el cual tiene la funcion de brindar ayuda, automatizar el servidor y dar un toque estetico al mismo.\n\n**[B.E] SYSTEM** Está programado en lenguaje JavaScript y en el programa `Visual Studio Code`")
    .addField("Comandos disponibles:", "`9`", false)
    .addField("Prefijo:", "be!")
    .addField("Programado con", "JavaScript")
    .addField("Creado el:", "28 de Diciembre de 2022")
    .addField("Tipo de bot:", "Multiproposito")
    .setDescription("Se piensan añadir más comandos en un futuro")
    .setFooter("[B.E] SYSTEM programado por MartinLuksic#4859")
    .setColor("#FFD700")
    .setTimestamp()

    const iembed = new Discord.MessageEmbed()
    .setTitle("Información del Banco")
    .setDescription("Acá podras observer la información general del banco")
    .addField("Fundado:", "<t:1621533180:R> (Más información pasando el cursor por encima)")
    .addField("▬▬▬▬▬▬▬▬▬▬ Consejo Ejecutivo ▬▬▬▬▬▬▬▬▬▬", " ")
    .addField("Presidente de Banco:", "JoséIgnLuksic#2227")
    .addField("Vicepresidente de Banco:", "MartinLuksic#4859")
    .addField("Secretaría de presidencia:", "fefiana#0371")
    .addField("Directorio de Banco:", "gon2807\nlemonty0\nOscarLarroca\nMrNachooo")
    .addField("▬▬▬▬▬▬ Gerencia en Administración General ▬▬▬▬▬▬", " ")
    .addField("Gerente General:", "N/A")
    .addField("Gerente de Cumplimiento y supervisión:", "franvg13nova")
    .addField("Secretario General de banco:", "N/A")
    .addField("▬▬▬▬▬▬▬▬▬ Administración de área ▬▬▬▬▬▬▬▬▬", " ")
    .addField("Gerente de Ejecutivo:", "gon2807")
    .addField("Director general de seguridad bancaria:", "N/A")
    .addField("Director de seguridad administrativa:", "CCA#1720")
    .addField("Director de seguridad de pasillo:", "N/A" )
    .addField("Gerente de asesoría legal Bancaria pública:", "sensey_pop")
    .addField("Gerente Asuntos públicos:", "Ninjenxd")
    .addField("Gerente de publicidad y reclutamiento:", "MrNachooo#1625")
    .addField("Gerente de Convenio:", "AlfredoDeAngelis")
    .setFooter("[B.E] SYSTEM programado por MartinLuksic#4859")
    .setColor("#FFD700")
    .setTimestamp()

    const cmdembed = new Discord.MessageEmbed()
    .setTitle("Comandos disponibles")
    .setDescription("Lista de comandos principales, más información con be!cmd")
    .addField("be!help", "Menú de ayuda general y uso del bot")
    .addField("be!cmd", "Muestra la lista de comandos **públicos** más completa.")
    .addField("be!info", "Muestra el link de Discord y el grupo de Roblox oficial.")
    .addField("be!say", "Fun command para que el bot diga lo que escribas, el abuso de este comando llevará en una sanción y el comando será vetado.")
    .addField("be!serverinfo", "Muestra la información del servidor de Discord.")
    .addField("be!sugerir, be!suggest", "Envía una sugerencia para votación general en el canal de Sugerencias.")
    .setFooter("[B.E] SYSTEM programado por MartinLuksic#4859")
    .setColor("#A9A9A9")
    .setTimestamp()

    const wembed = new Discord.MessageEmbed()
    .setTitle("Trabajos disponibles")
    .setDescription("Lista de comandos disponibles para postular")
    .addField("Seguridad de Pasillo", "Requisitos:\n1- Ser activo\n2- Ir a los juegos donde nuestro banco tiene sucursales y proteger su seguridad\n3- estar en discord y en el grupo de roblox\n4- resguardar la paz en ambas plataformas (Discord y roblox)\n5- Tener comprados los Uniformes\nPosibilidad de entrar 70%")
    .addField("Ejecutivo", "Requisitos:\n1- Ser activo (Especialmente en discord)\n2- Conocer la lista de deudores\n3- Conocer bien tu trabajo y nunca salirse de tema en conversaciones con deudores\n4- Vestir Formal cuando estés trabajando\n5-Sacar pruebas de todas las conversaciones con deudores\n6-estar en constante comunicación con el Gerente de ejecutivo\nPosibilidad de entrar 50%")
    .addField("Asesor Interno", "Requisitos:\1- Ser activo 100%\n2- Tener total comunicación con Dirección de banco y Gerenten\n3 - Vestir Formal cuando estés trabajando\n4 - Ir a las sucursales a supervisar actividad\n5- Tener conocimiento de el registro de auditoria\n6- ir a las sucursales a hacer RP y supervisar a los Cajeros/Ejecutivos\nPosibilidad de entrar 30%")
    .addField("Cajero:", "Requisitos:\n1- Ser activo\n2-Ambientar a todos y darles la bienvenida al banco [Solo en discord]n\3-estar en discord y en el grupo de roblox\n4-Tener comunicación con superiores\nPosibilidad de entrar 70%")
    .addField("Consultor de experiencia al cliente", "Requisitos\n1- Tener experiencia en atención a cliente.\n2- Saber hacer encuestas.\n3- Tener comunicación con la Gerencia.\n4- Mantener siempre el respeto al cliente siempre y cuando usted éste en labor.\n5- Ir a sucursales y supervisar la atención a cliente y su bien estar. (Cuando tengamos sucursal.)")
    .addField("Departamento de Edición", "Requisitos:\nTener experiencia editando imagenes, logos, etc.\nTener pruebas de ediciones anteriores.")
    .setFooter("[B.E] SYSTEM programado por MartinLuksic#4859")
    .setColor("#964B00")
    .setTimestamp()
   })

  }

}
