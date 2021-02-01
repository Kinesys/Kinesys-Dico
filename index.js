const Discord = require("discord.js")

const client = new Discord.Client()

const config = require("./config.json")

const command = require('./command')

client.on('ready', () => {
    console.log("The Client is Ready")

    command(client, 'hi', (message) => {
        message.channel.send('Hi Kinesys Server!')
    })

    command(client, 'name', (message) => {
        message.channel.send("My name is Nemeisys, Discord Bot.")
    })

    command(client, 'name -k', (message) => {
        message.channel.send("제 이름은 네메시스, 디스코드 봇 입니다.")
    })

    command(client, 'servers', (message) => {
        client.guilds.cache.forEach((guild) => {
            console.log(guild)
        })
    })

    command(client, 'members', (message) => {
        client.guilds.cache.forEach((guild) => {
            message.channel.send(`${guild.name}의 Member는 총 ${guild.memberCount}명 입니다`)
        })
    })

})

client.login(config.token)
