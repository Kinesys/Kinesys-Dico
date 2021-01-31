//command handler js_code

const { prefix } = request('./config.json')

/*
    ['ping', 'test']

    'ping'
*/


module.exports = (client, aliases, callback) => {
    
    if(typeof aliases === 'string') {
        aliases = [aliases]
    }

    client.on('message', message => {
        const { content } = message;
    })
}
