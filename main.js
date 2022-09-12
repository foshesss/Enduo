const { Client, GatewayIntentBits, Partials } = require('discord.js');
const fs = require('fs');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
    partials: [
        Partials.Message,
        Partials.Channel,
        Partials.Reaction
    ],
});

const config = JSON.parse(
    fs.readFileSync('config.json')
);

// TODO: find message and listen to reactions
// add role on specific reactions

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

// client.on('messageCreate', message => {
//     if (message.author.id == config.foshes) {
//         const isAdminCommand = foshesAdminCommands(message);
//         if (isAdminCommand == true) return;
//     }
// });

client.login(config.id);

