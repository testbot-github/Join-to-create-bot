const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const express = require('express')
const app = express()
const port = config.port;

app.get('/', (req, res) => {
  res.send('Bot Working!!')
})
app.listen(port, () => {})
client.on("ready", ()=>console.log("READY"));

const jointocreate = require("./jointocreate");
jointocreate(client);


client.login(process.env.TOKEN);