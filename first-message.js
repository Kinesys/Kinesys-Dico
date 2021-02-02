const addReactions = (message, reactions) => {

    message.react(reactions[0])
    reactions.shift()
    if (reactions.length > 0) {
        setTimeout(() => addReactions(message, reactions), 750)

    }
}

module.exports = async(client, id, text, reactions = []) => {

    const channel = await client.channels.fetch(id)

    channel.messages.fetch().then((messages) => {
        if (messages.size === 0) {

            //send new Message(새 메세지 수신)

            channel.send(text).then(message => {
                addReactions(message, reactions)
            })

        } else {
            //Edit the existing message(기존 메세지 수정)
        }
    })
}