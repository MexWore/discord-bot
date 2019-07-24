const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`botun olan ${client.user.tag}sunucuya giriş yaptı artık aktif!`);
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'merhaba') {
    msg.reply('Merhaba kanka nasılsın!');
  }
  if (msg.content.toLowerCase() === 'merhabalar aq') {
    msg.reply('Orosbu evladı onun modası geçti.');
  }
  if (msg.content.toLowerCase() === 'sa') {
    msg.reply('As reis <3');
  }
  if (msg.content.toLowerCase() === 'naber') {
    msg.channel.sendMessage('İyi Kanki,Senden Naber?');
  }
  if (msg.content.toLowerCase() === 'meraba') {
    msg.reply('meraba değil o Merhaba!');
  }
  if (msg.content.toLowerCase() === 'selam') {
    msg.reply('selam!');
  }
  if (msg.content.toLowerCase() === 'e!komut') {
    msg.channel.sendMessage('```Komutlar Yapım Aşamasında!```');
  }
});

client.login('NjAzNjM2MDM2MzY2NDk5ODYx.XTia4A.e7IZdgwd_Rb5O7tqNryp5X6am3I');
