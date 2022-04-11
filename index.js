const mineflayer = require('mineflayer');

const botArgs = {
  host:  'bukankita.aternos.me',
  port: '59181',
  username: 'bot-iru'
};

const initBot = () =>{

  let bot = mineflayer.createBot(botArgs);
  
  bot.on('login', () => {
    let botSocket = bot._client.socket;
  
    console.log('Bot Login');
  });

  bot.on('death', () => {
    bot.emit('respawn');
  });
  
  bot.on('end', () => {
    console.log('Disconnected');

    setTimeout(initBot, 1000);
  });
  
  bot.on('kicked', () => {
    console.log('Bot Kicked');

    setTimeout(initBot, 1000);
  });

}

initBot();

require("http").createServer((_, res) => res.end("Uptime!")).listen(8000);