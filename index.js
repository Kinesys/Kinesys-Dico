const Discord = require("discord.js")

const client = new Discord.Client()

const config = require("./config.json")

const command = require('./command')

const privateMessage = require('./private-message')

const firstMessage = require('./first-message')


client.on('ready', () => {
    console.log("The Client is Ready")

    command(client, 'hi', (message) => {
        message.channel.send('Hi Kinesys Server!')
    })

    command(client, 'name', (message) => { //봇 소개
        message.channel.send("My name is Nemeisys, Discord Bot.")
    })

    command(client, 'name -k', (message) => { //봇 소개 k패치
        message.channel.send("제 이름은 네메시스, 디스코드 봇 입니다.")
    })

    command(client, 'servers', (message) => { //해당 봇이 들어있는 서버 확인하기
        client.guilds.cache.forEach((guild) => {
            console.log(guild)
        })
    })

    command(client, 'members', (message) => { //멤버 수 확인
        client.guilds.cache.forEach((guild) => {
            message.channel.send(`${guild.name}의 Member는 총 ${guild.memberCount}명 입니다`)
        })
    })


    command(client, 'Server', (message) => { //봇 상태 지정
        const content = message.content.replace('//status', '')

        // "!status hello world" => "hello world"

        client.user.setPresence({
            activity: {
                name: content,
                type: 0,
            },
        })

    })

    //message 반응(react) 
    firstMessage(client, '', 'Welcome to My Server\n 여기는 Kinesys의 Private Server입니다.\n 하지만 몇 가지의 규정이 존재하므로\n 반드시 공지 채널의 공지를 읽어주세요.\n 확인 후에는 밑의 아이콘을 눌러주세요.', ['🔥'])

    //private message
    privateMessage(client, '//bot', 'Bot을 호출하였습니다.')
})



client.login(config.token)
