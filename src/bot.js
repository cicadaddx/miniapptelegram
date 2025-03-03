const TelegramBot = require('node-telegram-bot-api');

// Acesse a variável de ambiente
const token = process.env.TELEGRAM_BOT_TOKEN;
const bot = new TelegramBot(token, { polling: true });

// Comando /start
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, "Bem-vindo ao bot! Use /calculadora para acessar a calculadora.");
});

// Comando /calculadora
bot.onText(/\/calculadora/, (msg) => {
    const chatId = msg.chat.id;
    const calculatorUrl = 'https://sua-url-da-calculadora.com'; // Substitua pela URL da sua calculadora
    bot.sendMessage(chatId, `Acesse a calculadora aqui: ${calculatorUrl}`);
});
