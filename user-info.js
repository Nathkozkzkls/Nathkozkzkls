const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
   data: new SlashCommandBuilder()
   .setName('user-info')
   .setDescription('Permet d\'afficher les informations corcernant un utilisateur')
   .addUserOption(option =>
       option.setName('utilisateur')
          .setDescription('De quel utilisateur voulez-vous obtenir les informations?')
          .setRequired(false)
   ),
   async execute(client, interaction) {
       const user = interaction.options.getUser('utilisateur') || interaction.user;
       const member = await interaction.guild.members.fetch(user.id);

       const userEmbed = new EmbedBuilder()
          .setColor('#8800d4')
          .setTitle(`Voici les informations de ${user.username}#${user.discriminator} `)
          .setDescription(`**Nom d'utilisateur :** ${user.username}\n` + 
          `**Id :** ${user.id}\n `+
          `**Discriminator :** #${user.discriminator}\n` +
          `**Compte créé le:** <t:${Math.floor(user.createdAt / 1000)}:F>\n` +
          `**Rôles :** ${member.roles.cache.map(r => r).join('  ')}`
          )
          .setThumbnail(user.displayAvatarURL())

          await interaction.reply({ embeds: [userEmbed] });
   
}
}