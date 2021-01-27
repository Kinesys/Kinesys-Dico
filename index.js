const Discord = require("discord.js")

const client = new Discord.Client()

const config = require("./config.json")

client.on('ready', () => {
    console.log("The Client is Ready")
})

client.login(config.token)