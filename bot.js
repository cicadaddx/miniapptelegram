const TelegramBot = require('node-telegram-bot-api');

// Substitua pelo seu token
const TOKEN = "7407887292:AAGR0rhwzI6YzUUGgOg91QuyNZ44HfrUNFA";
const bot = new TelegramBot(TOKEN, { polling: true });

// Resposta ao comando /start
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, "Bem-vindo ao bot! Use /calcular para calcular suas apostas.");
});

// Comando para calcular apostas
bot.onText(/\/calcular/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, "Por favor, digite o valor da sua banca:");
  
  bot.once('message', (msg) => {
    const banca = parseFloat(msg.text);
    if (!isNaN(banca) && banca > 0) {
      const zero = (banca * 2) / 100;
      const duzia1 = (banca * 10) / 100;
      const duzia2 = (banca * 10) / 100;
      bot.sendMessage(chatId, `🔵 Zero: R$ ${zero.toFixed(2)}\n🟡 1ª Dúzia: R$ ${duzia1.toFixed(2)}\n🔴 2ª Dúzia: R$ ${duzia2.toFixed(2)}`);
    } else {
      bot.sendMessage(chatId, "Valor inválido. Tente novamente.");
    }
  });
});