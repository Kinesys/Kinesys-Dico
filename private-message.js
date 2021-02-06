module.exports = (client, triggerText, replyText) => {
    client.on('message', message => {
        if(message.content.toLowerCase() === triggerText.toLowerCase()) {
            Message.Author.send(replyText)
        }
    })
}