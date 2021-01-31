//command handler js_code

const { prefix } = request('./config.json')

['ping', 'test']



module.exports = (client, aliases, callback) => {
    
    client.on('message', message => {
        const { content } = message;
    })
}
