
const { SlashCommandBuilder } = require('discord.js');
module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Permet d\'afficher la latence de mon ping!'),
    async execute(client, interaction) {
        await interaction.reply(`> ** Ping :** ${interaction.client.ws.ping} ms`);
    },
};