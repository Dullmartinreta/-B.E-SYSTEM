const Discord = require('discord.js');
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js')
const db = require("quick.db");

module.exports = {
  name: "cc",
  alias: ["cuenta-corriente"],
  execute (client, message, args) {

    db.add('balance_'+user.id, 0)


  }

}