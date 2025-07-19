import { Client, Events, GatewayIntentBits } from 'discord.js';

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });


client.on("messageCreate", (message) => {
    if(message.author.bot) return;
    if (message.content.startsWith('Create')){
        const url = message.content.split('Create')[1];
        return message.reply({
            content:"generating short url for "+ url
        })
    }
})

client.on("interactionCreate", (interaction)=>{
    interaction.reply('Pong !!!')
    
})

client.login("MTM5NTM1MzE2Njg1NzM3NTc0NA.GvHCak.7UpT30b_Wxb66bMIOCLw5rERQIFgGP3UtYPthg")