import { REST, Routes } from 'discord.js';

const commands = [
  {
    name: 'ping',
    description: 'Replies with Pong!',
  },
];

const rest = new REST({ version: '10' }).setToken("MTM5NTM1MzE2Njg1NzM3NTc0NA.GvHCak.7UpT30b_Wxb66bMIOCLw5rERQIFgGP3UtYPthg");

try {
  console.log('Started refreshing application (/) commands.');

  await rest.put(Routes.applicationCommands("1395353166857375744"), { body: commands });

  console.log('Successfully reloaded application (/) commands.');
} catch (error) {
  console.error(error);
}