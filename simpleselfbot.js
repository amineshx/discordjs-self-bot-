// and this is just some simple self bot communication will detecte '@hello' string
// and reply with 'hello!'

const { Client } = require("discord.js-selfbot-v13");
const settings = require('./settings.json')
const prefix='@'
const client = new Client({checkUpdate: false})

client.once('ready',()=>{
    console.log(`loged in ${client.user.username}`)
})

client.on('messageCreate',(msg)=>{
    if(msg.author.id ==client.user.id || !msg.content.startsWith(prefix)) return;
    switch(msg.content.replace(prefix, '').split(' ')[0]){
        case 'hello':
            msg.reply('hello!')
        break;
    }
})
client.login(settings.token)