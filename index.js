const sulla = require('sulla');

sulla.create().then((client) => start(client));

function start(client) {
  client.onMessage((message) => {
    let checks =  (message.author).includes(number) && (message.chatId).includes(chatId) && (message.body).toLowerCase().includes(word);
      if (checks) {
        client.sendText(chatId,text);
      }
    });
}