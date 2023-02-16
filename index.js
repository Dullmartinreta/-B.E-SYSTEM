const Discord = require('discord.js'); //Definimos discord
const { Client, MessageEmbed, Collection, Guild } = require('discord.js');
const intents = new Discord.Intents(14023) //se recomiendan 32767
const client = new Discord.Client({ intents })
const fs = require('fs'); //Definimos fs
let { readdirSync } = require('fs'); //Definimos readdirSync que también lo necesitamos
const express = require("express")().get("/", (req,res)=>res.send("Bot en Linea!")).listen(3000)

console.log("Bot en Linea!")

////////////////////////HANDLER//////////////////////////
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./comandos').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./comandos/${file}`);
    client.commands.set(command.name, command);
      console.log(`🚨${file} Ready!🚨`)
}

client.slashcommands = new Discord.Collection();
const slashcommandsFiles = fs.readdirSync("./slashcmd").filter(file => file.endsWith('.js'));

for(const file of slashcommandsFiles){
  const slash = require(`./slashcmd/${file}`)
  client.slashcommands.set(slash.data.name, slash)
  console.log(`🚨Slashcommand ${file} Ready!🚨`)
}

client.on("interactionCreate", async(interaction) => {
  if(!interaction.isCommand()) return;

  const slashcmds = client.slashcommands.get(interaction.commandName)

  if(!slashcmds) return;
  
  try{
    await slashcmds.run(client, interaction)
  } catch (e){
    console.error(e)
  }
})
//////////////////termina el HANDLER
//Lista de Eventos (No Borrar)

for(const file of readdirSync('./eventos/')) { //Los eventos de carga para el bot
  if(file.endsWith(".js")){
  let fileName = file.substring(0, file.length - 3); 
  let fileContents = require(`./eventos/${file}`); 
  client.on(fileName, fileContents.bind(null, client));}}
  ////////////////////////
client.on('messageCreate', (message) => {

let prefix = 'be!'

if(message.channel.type === "dm") return
if(message.author.bot) return;
if(!message.content.startsWith(prefix)) return;

let usuario = message.mentions.members.first() || message.member;
const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();
  
//EVENTO/MESSAGE
////
  let cmd = client.commands.find((c) => c.name === command || c.alias && c.alias.includes(command));
if(cmd){
cmd.execute(client, message, args)
}

    });
///aqui evento message


client.login("MTA1NzQ5MDI5MTY1MDczNjE3OA.GlMDqr.Q1j-wirimIRawHL7qKebWS9BjeSjAq-Y28wXD4")
